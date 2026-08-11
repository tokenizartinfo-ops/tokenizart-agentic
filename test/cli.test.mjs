import assert from "node:assert/strict";
import test from "node:test";

import {
  EXIT_CODES,
  buildMcpHeaders,
  parseCliArgs,
  runCli,
} from "../src/cli.js";

test("CLI parses explicit profile, JSON output and public knowledge list arguments", () => {
  const parsed = parseCliArgs([
    "--profile", "staging",
    "--json",
    "knowledge", "list",
    "--flow", "mint",
    "--limit", "2",
  ]);

  assert.deepEqual(parsed, {
    profile: "staging",
    json: true,
    group: "knowledge",
    command: "list",
    options: { flow: "mint", limit: 2 },
  });
});

test("CLI rejects execution namespaces and secret command-line flags", () => {
  assert.throws(
    () => parseCliArgs(["atelier", "execute", "mint"]),
    /unsupported_command/
  );
  assert.throws(
    () => parseCliArgs(["--admin-secret", "secret", "knowledge", "list"]),
    /secret_flags_forbidden/
  );
});

test("MCP headers load credentials from environment without returning them in config output", () => {
  const headers = buildMcpHeaders({
    TOKENIZART_MCP_ADMIN_SECRET: "admin-secret",
    TOKENIZART_MCP_ACCESS_CLIENT_ID: "access-id",
    TOKENIZART_MCP_ACCESS_CLIENT_SECRET: "access-secret",
  });

  assert.equal(headers["x-tokenizart-admin-secret"], "admin-secret");
  assert.equal(headers["CF-Access-Client-Id"], "access-id");
  assert.equal(headers["CF-Access-Client-Secret"], "access-secret");
  assert.equal(JSON.stringify(headers).includes("TOKENIZART_"), false);
});

test("CLI calls the stable knowledge.search MCP tool and preserves the cited envelope", async () => {
  const calls = [];
  const result = await runCli([
    "--profile", "staging",
    "--json",
    "knowledge", "search",
    "--query", "como funciona Mint",
    "--flow", "mint",
  ], {
    env: {
      TOKENIZART_MCP_ADMIN_SECRET: "secret",
    },
    clientFactory: async ({ endpoint, headers }) => ({
      async callTool(name, args) {
        calls.push({ name, args, endpoint, hasSecret: Boolean(headers["x-tokenizart-admin-secret"]) });
        return {
          schema: "tokenizart.public_knowledge_search",
          audience: "public",
          count: 1,
          results: [{ id: "mint", access_level: "Nivel 5", status: "verified" }],
          no_mutations: true,
        };
      },
      async close() {},
    }),
  });

  assert.equal(result.exitCode, EXIT_CODES.OK);
  assert.equal(result.stderr, "");
  assert.equal(calls[0].name, "knowledge.search");
  assert.deepEqual(calls[0].args, { query: "como funciona Mint", flow: "mint", limit: 5 });
  assert.equal(calls[0].endpoint, "https://companion-staging.tokenizart.info/mcp");
  assert.equal(calls[0].hasSecret, true);
  assert.equal(JSON.parse(result.stdout).data.results[0].access_level, "Nivel 5");
  assert.equal(result.stdout.includes("secret"), false);
});

test("CLI demo open produces an allowlisted URL without an MCP connection", async () => {
  let connected = false;
  const result = await runCli([
    "--profile", "staging",
    "--json",
    "demo", "open",
    "--flow", "certify",
    "--lang", "es",
    "--scenario", "first-artwork",
    "--step", "certify.understand",
  ], {
    env: {},
    clientFactory: async () => {
      connected = true;
      throw new Error("must not connect");
    },
  });

  const body = JSON.parse(result.stdout);
  assert.equal(result.exitCode, EXIT_CODES.OK);
  assert.equal(connected, false);
  assert.equal(body.data.url.startsWith("https://demo-atelier-staging.tokenizart.info/"), true);
  assert.equal(body.data.no_mutations, true);
});

test("CLI fails closed when the MCP result is not public verified data", async () => {
  const result = await runCli([
    "--profile", "staging",
    "--json",
    "knowledge", "get",
    "--id", "owner-record",
  ], {
    env: { TOKENIZART_MCP_ADMIN_SECRET: "secret" },
    clientFactory: async () => ({
      async callTool() {
        return {
          schema: "tokenizart.public_knowledge_get",
          found: true,
          concept: { id: "owner-record", access_level: "Nivel 4", status: "verified" },
        };
      },
      async close() {},
    }),
  });

  assert.equal(result.exitCode, EXIT_CODES.POLICY);
  assert.equal(JSON.parse(result.stdout).error, "public_policy_violation");
});
