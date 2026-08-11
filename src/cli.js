export const EXIT_CODES = Object.freeze({
  OK: 0,
  USAGE: 2,
  CONFIG: 3,
  AUTH: 4,
  NOT_FOUND: 5,
  POLICY: 6,
  NETWORK_PROTOCOL: 7,
  UPSTREAM: 8,
});

const PROFILE_CONFIG = Object.freeze({
  local: {
    endpoint: "http://127.0.0.1:8791/mcp",
    demoBaseUrl: "http://127.0.0.1:8793",
  },
  staging: {
    endpoint: "https://companion-staging.tokenizart.info/mcp",
    demoBaseUrl: "https://demo-atelier-staging.tokenizart.info",
  },
  production: {
    endpoint: "https://companion.tokenizart.info/mcp",
    demoBaseUrl: "https://demo-atelier.tokenizart.info",
  },
});

const COMMANDS = Object.freeze({
  "knowledge.list": { tool: "knowledge.list", options: ["flow", "limit", "cursor"] },
  "knowledge.get": { tool: "knowledge.get", options: ["id", "source_path"] },
  "knowledge.search": { tool: "knowledge.search", options: ["query", "flow", "limit"] },
  "gallery.artwork-traceability": {
    tool: "readPublicArtworkTraceabilityLinks",
    options: ["artwork_ref"],
  },
  "gallery.certify-traceability": {
    tool: "readPublicCertifyTraceabilityLinks",
    options: ["artwork_ref", "certify_ref"],
  },
  "demo.open": { tool: null, options: ["flow", "lang", "scenario", "step"] },
});

const VALUE_FLAGS = new Map([
  ["--profile", "profile"],
  ["--flow", "flow"],
  ["--limit", "limit"],
  ["--cursor", "cursor"],
  ["--id", "id"],
  ["--source-path", "source_path"],
  ["--query", "query"],
  ["--artwork-ref", "artwork_ref"],
  ["--certify-ref", "certify_ref"],
  ["--lang", "lang"],
  ["--scenario", "scenario"],
  ["--step", "step"],
]);

function cliError(message) {
  const error = new Error(message);
  error.code = message;
  return error;
}

function secretLikeFlag(token) {
  return /^--.*(?:secret|password|private-key|api-key|access-token|bearer|credential)/i.test(token);
}

export function parseCliArgs(argv = []) {
  const tokens = Array.from(argv, value => String(value));
  if (tokens.some(secretLikeFlag)) throw cliError("secret_flags_forbidden");

  let profile = "";
  let json = false;
  const positionals = [];
  const rawOptions = {};

  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token === "--json") {
      json = true;
      continue;
    }
    if (!token.startsWith("--")) {
      positionals.push(token);
      continue;
    }
    const key = VALUE_FLAGS.get(token);
    if (!key) throw cliError(`unknown_option:${token}`);
    const value = tokens[index + 1];
    if (!value || value.startsWith("--")) throw cliError(`missing_option_value:${token}`);
    index += 1;
    if (key === "profile") profile = value;
    else rawOptions[key] = value;
  }

  const [group = "", command = "", ...extraPositionals] = positionals;
  const commandKey = `${group}.${command}`;
  const contract = COMMANDS[commandKey];
  if (!contract || extraPositionals.length) throw cliError("unsupported_command");
  if (!profile) throw cliError("profile_required");
  if (!PROFILE_CONFIG[profile]) throw cliError("unsupported_profile");

  const options = {};
  for (const [key, value] of Object.entries(rawOptions)) {
    if (!contract.options.includes(key)) throw cliError(`option_not_allowed:${key}`);
    if (key === "limit") {
      const parsed = Number(value);
      if (!Number.isInteger(parsed) || parsed < 1 || parsed > 50) throw cliError("invalid_limit");
      options[key] = parsed;
    } else {
      options[key] = value;
    }
  }

  if (commandKey === "knowledge.search" && !options.query) throw cliError("query_required");
  if (commandKey === "knowledge.get" && !options.id && !options.source_path) throw cliError("id_or_source_path_required");
  if (commandKey === "gallery.artwork-traceability" && !options.artwork_ref) throw cliError("artwork_ref_required");
  if (commandKey === "gallery.certify-traceability" && (!options.artwork_ref || !options.certify_ref)) {
    throw cliError("artwork_and_certify_ref_required");
  }
  if (commandKey === "knowledge.list" && !options.limit) options.limit = 20;
  if (commandKey === "knowledge.search" && !options.limit) options.limit = 5;

  return { profile, json, group, command, options };
}

export function buildMcpHeaders(env = {}) {
  const headers = {};
  const adminSecret = String(env.TOKENIZART_MCP_ADMIN_SECRET || "").trim();
  const accessId = String(env.TOKENIZART_MCP_ACCESS_CLIENT_ID || "").trim();
  const accessSecret = String(env.TOKENIZART_MCP_ACCESS_CLIENT_SECRET || "").trim();
  if (adminSecret) headers["x-tokenizart-admin-secret"] = adminSecret;
  if (accessId && accessSecret) {
    headers["CF-Access-Client-Id"] = accessId;
    headers["CF-Access-Client-Secret"] = accessSecret;
  }
  return headers;
}

function publicVerifiedRecord(record = {}) {
  return record?.access_level === "Nivel 5" && record?.status === "verified";
}

function resultPassesPolicy(commandKey, data = {}) {
  if (commandKey === "knowledge.get") {
    return data.found === false || (data.found === true && publicVerifiedRecord(data.concept));
  }
  if (commandKey.startsWith("knowledge.")) {
    return Array.isArray(data.results) && data.results.every(publicVerifiedRecord);
  }
  if (commandKey.startsWith("gallery.")) {
    return data.access_level === "Nivel 5" && data.no_mutations === true;
  }
  return true;
}

function safeResult(profile, commandKey, data) {
  return {
    schema: "tokenizart.cli_result",
    version: "1.0.0",
    request_id: crypto.randomUUID(),
    profile,
    command: commandKey,
    data,
  };
}

function formatSuccess(parsed, data) {
  const envelope = safeResult(parsed.profile, `${parsed.group}.${parsed.command}`, data);
  return parsed.json ? JSON.stringify(envelope) : JSON.stringify(envelope, null, 2);
}

function formatError(parsed, error, message = "") {
  const envelope = {
    schema: "tokenizart.cli_error",
    version: "1.0.0",
    error,
    ...(message ? { message } : {}),
  };
  return parsed?.json ? JSON.stringify(envelope) : JSON.stringify(envelope, null, 2);
}

function demoUrl(profile, options = {}) {
  const allowedFlows = new Set(["overview", "onboarding", "account_wallet", "carga_obra", "mint", "certify", "chip", "vouchers", "privacy", "transfer"]);
  const allowedLanguages = new Set(["es", "en", "pt"]);
  const flow = options.flow || "overview";
  const lang = options.lang || "es";
  const scenario = options.scenario || "first-artwork";
  const step = options.step || "";
  if (!allowedFlows.has(flow) || !allowedLanguages.has(lang)) throw cliError("demo_parameter_not_allowed");
  if (!/^[a-z0-9._-]{1,120}$/i.test(scenario) || (step && !/^[a-z0-9._-]{1,160}$/i.test(step))) {
    throw cliError("demo_parameter_not_allowed");
  }
  const url = new URL(PROFILE_CONFIG[profile].demoBaseUrl);
  url.searchParams.set("flow", flow);
  url.searchParams.set("lang", lang);
  url.searchParams.set("scenario", scenario);
  if (step) url.searchParams.set("step", step);
  return url.toString();
}

async function defaultClientFactory(config) {
  const { createMcpClient } = await import("./mcp-client.js");
  return createMcpClient(config);
}

export async function runCli(argv = [], deps = {}) {
  let parsed;
  try {
    parsed = parseCliArgs(argv);
  } catch (error) {
    return {
      exitCode: EXIT_CODES.USAGE,
      stdout: JSON.stringify({ schema: "tokenizart.cli_error", version: "1.0.0", error: error.code || "invalid_usage" }),
      stderr: "",
    };
  }

  const env = deps.env || process.env;
  const commandKey = `${parsed.group}.${parsed.command}`;
  if (parsed.profile === "production" && env.TOKENIZART_CLI_ALLOW_PRODUCTION_READONLY !== "YES") {
    return {
      exitCode: EXIT_CODES.CONFIG,
      stdout: formatError(parsed, "production_profile_not_enabled"),
      stderr: "",
    };
  }

  if (commandKey === "demo.open") {
    try {
      return {
        exitCode: EXIT_CODES.OK,
        stdout: formatSuccess(parsed, { url: demoUrl(parsed.profile, parsed.options), no_mutations: true }),
        stderr: "",
      };
    } catch (error) {
      return { exitCode: EXIT_CODES.USAGE, stdout: formatError(parsed, error.code || "invalid_usage"), stderr: "" };
    }
  }

  const headers = buildMcpHeaders(env);
  if (!headers["x-tokenizart-admin-secret"]) {
    return {
      exitCode: EXIT_CODES.CONFIG,
      stdout: formatError(parsed, "mcp_admin_secret_not_configured"),
      stderr: "",
    };
  }

  let client;
  try {
    const clientFactory = deps.clientFactory || defaultClientFactory;
    client = await clientFactory({
      endpoint: PROFILE_CONFIG[parsed.profile].endpoint,
      headers,
      profile: parsed.profile,
    });
    const data = await client.callTool(COMMANDS[commandKey].tool, parsed.options);
    if (!resultPassesPolicy(commandKey, data)) {
      return {
        exitCode: EXIT_CODES.POLICY,
        stdout: formatError(parsed, "public_policy_violation"),
        stderr: "",
      };
    }
    if (commandKey === "knowledge.get" && data.found === false) {
      return {
        exitCode: EXIT_CODES.NOT_FOUND,
        stdout: formatError(parsed, data.error || "not_found"),
        stderr: "",
      };
    }
    return { exitCode: EXIT_CODES.OK, stdout: formatSuccess(parsed, data), stderr: "" };
  } catch (error) {
    const message = String(error?.message || error).slice(0, 240);
    const auth = /401|403|unauthor|forbidden/i.test(message);
    return {
      exitCode: auth ? EXIT_CODES.AUTH : EXIT_CODES.NETWORK_PROTOCOL,
      stdout: formatError(parsed, auth ? "authentication_failed" : "mcp_request_failed", message),
      stderr: "",
    };
  } finally {
    await client?.close?.().catch(() => {});
  }
}
