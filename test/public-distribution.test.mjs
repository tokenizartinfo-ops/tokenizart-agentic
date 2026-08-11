import assert from "node:assert/strict";
import fs from "node:fs/promises";
import test from "node:test";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  scanTextForLeaks,
  validateCommercialIntegrationPolicy,
  validatePublicDistribution,
  validateSkillDocument,
} from "../scripts/validate-public-distribution.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("public distribution contains the approved licenses, skills and OKF bundle", async () => {
  const result = await validatePublicDistribution(root);

  assert.deepEqual(result.errors, []);
  assert.equal(result.skills, 3);
  assert.equal(result.okfConcepts > 0, true);
});

test("public skill validation requires Nivel 5, read-only behavior and valid frontmatter", () => {
  const valid = `---
name: tokenizart-public-example
description: Use when an agent needs verified public Tokenizart guidance.
---

# Tokenizart public example

Access: Nivel 5. Mode: read-only.

Never execute Mint, Certify, transfers, voucher changes, privacy changes,
NFC binding, uploads or wallet signing.
`;
  assert.deepEqual(validateSkillDocument(valid, "skills/example/SKILL.md"), []);

  const invalid = valid
    .replace("Nivel 5", "Nivel 4")
    .replace("Mode: read-only", "Mode: execute");
  const errors = validateSkillDocument(invalid, "skills/example/SKILL.md");
  assert.equal(errors.some((error) => error.includes("Nivel 5")), true);
  assert.equal(errors.some((error) => error.includes("read-only")), true);
});

test("leak scanner fails closed on secrets, private paths and owner data", () => {
  const secret = ["OPENAI", "API", "KEY"].join("_") + "=" + ["sk", "example", "secret", "value"].join("-");
  const localPath = ["C:", "Users", "private", "internal.md"].join("\\");
  const ownerData = ["owner", "context"].join("_") + ": { email: user@example.com }";
  const findings = scanTextForLeaks([secret, localPath, ownerData].join("\n"), "fixture.txt");

  assert.equal(findings.some((error) => error.includes("secret")), true);
  assert.equal(findings.some((error) => error.includes("local path")), true);
  assert.equal(findings.some((error) => error.includes("owner data")), true);
});

test("commercial integration policy exposes four safe modes and no implied execution rights", async () => {
  const policyPath = path.join(
    root,
    "contracts/tokenizart-commercial-integration-policy.v1.json",
  );
  const policy = JSON.parse(await fs.readFile(policyPath, "utf8"));

  assert.deepEqual(validateCommercialIntegrationPolicy(policy, policyPath), []);
  assert.deepEqual(
    policy.commercial_modes.map((mode) => mode.id),
    [
      "public_readonly",
      "attributed_integration",
      "managed_white_label",
      "enterprise_oem",
    ],
  );
  assert.equal(policy.default_mode, "public_readonly");
  assert.equal(policy.pricing_policy.standing_price_offer, false);
  assert.equal(policy.blocked_public_capabilities.includes("mint_execute"), true);
  assert.equal(policy.blocked_public_capabilities.includes("wallet_signing"), true);
});

test("commercial integration policy rejects prices, private levels and mutation grants", () => {
  const invalid = {
    contract: "tokenizart.commercial_integration_policy.v1",
    version: "1.0.0",
    access_level: "Nivel 2",
    default_mode: "enterprise_oem",
    business_formula: "invalid",
    commercial_modes: [
      {
        id: "enterprise_oem",
        activation: "automatic",
        execution: "mint_execute for USD 99",
      },
    ],
    pricing_policy: { standing_price_offer: true },
    blocked_public_capabilities: [],
    responsibility_boundaries: {},
    required_agreement_annexes: [],
  };

  const errors = validateCommercialIntegrationPolicy(invalid, "fixture.json");
  assert.equal(errors.some((error) => error.includes("Nivel 5")), true);
  assert.equal(errors.some((error) => error.includes("four commercial modes")), true);
  assert.equal(errors.some((error) => error.includes("numeric public price")), true);
  assert.equal(errors.some((error) => error.includes("mutation capability")), true);
});
