# Tokenizart Agentic Repository Instructions

This repository is the filtered, contract-first candidate distribution surface
for Tokenizart public MCP clients, the official CLI, Agent Skills, synthetic
examples and future OKF public bundles.

## Authority

- Obsidian and private GitHub repositories remain canonical.
- This repository contains derived or filtered Nivel 5 artifacts only.
- Cloudflare MCP and RAG are runtime layers, not editorial authority.

## Guardrails

- Public commands and skills use only Nivel 5 verified knowledge.
- Never add secrets, `.env` values, credentials, raw user data, owner context,
  private source paths or internal infrastructure configuration.
- No Mint, Certify, transfer, voucher mutation, privacy mutation, NFC binding,
  upload or wallet-signing command is allowed.
- Preparation commands are future dry-runs and require separate contracts.
- Keep tool names, exit codes and JSON envelopes versioned and backward
  compatible.
- Tests use only synthetic fixtures.
- Production access and publication require explicit approval.

## Workflow

1. Change a versioned contract first.
2. Write the failing test.
3. Implement the smallest compatible read-only behavior.
4. Run `npm test` and an MCP local smoke when transport changes.
5. Do not publish packages, repositories, Registry metadata or production
   deployments without a separate approval.
