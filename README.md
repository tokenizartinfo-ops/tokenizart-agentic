# Tokenizart Agentic

Local alpha for Tokenizart's official contract-first CLI and future public
Agent Skills package.

Status: public-repository release candidate. It is not published to npm, the
MCP Registry or production.

**Business model:** open edge + proprietary core. Tokenizart publishes clients,
contracts, public skills and attributable knowledge while hosted execution,
vouchers, transaction sponsorship, owner services and NFC operations remain
proprietary. See [Business Model](docs/BUSINESS-MODEL.md),
[Spanish version](docs/BUSINESS-MODEL.es.md),
[Commercial Paths for Integrators](docs/INTEGRATOR-COMMERCIAL-PATHS.md),
[modalidades comerciales en espanol](docs/INTEGRATOR-COMMERCIAL-PATHS.es.md)
and [License Policy](LICENSE-POLICY.md).

## Current capabilities

- `knowledge list|get|search` through the protected public MCP pilot.
- public artwork and Certify traceability reads.
- allowlisted Demo Atelier deep links.
- JSON output, explicit profiles and stable exit codes.

All capabilities are read-only. There are no execution commands.

## Install locally

```powershell
npm install
npm test
```

## Configuration

Credentials are environment-only and are never accepted as CLI arguments:

```text
TOKENIZART_MCP_ADMIN_SECRET
TOKENIZART_MCP_ACCESS_CLIENT_ID
TOKENIZART_MCP_ACCESS_CLIENT_SECRET
```

The two Cloudflare Access values are optional when the selected endpoint does
not require a service token. The admin secret is currently required because
the MCP pilot remains protected.

Production is disabled unless the operator explicitly sets:

```text
TOKENIZART_CLI_ALLOW_PRODUCTION_READONLY=YES
```

## Examples

```powershell
node bin/tokenizart.js --profile staging --json knowledge list --flow mint --limit 5
node bin/tokenizart.js --profile staging --json knowledge get --id 03-atelier-actions-mint-md
node bin/tokenizart.js --profile staging --json knowledge search --query "como funciona Mint" --flow mint
node bin/tokenizart.js --profile staging --json gallery artwork-traceability --artwork-ref "atelier:artwork:313"
node bin/tokenizart.js --profile staging --json demo open --flow certify --lang es --scenario first-artwork
```

## Exit codes

| Code | Meaning |
| --- | --- |
| 0 | success |
| 2 | invalid usage |
| 3 | missing or disabled configuration |
| 4 | authentication failure |
| 5 | public record not found |
| 6 | access or response-policy violation |
| 7 | network or MCP protocol failure |
| 8 | upstream service failure |

The versioned boundary is `contracts/tokenizart-cli.v1.json`.

## Discovery

- [Public architecture](docs/ARCHITECTURE.md)
- [Public OKF v0.2 bundle](okf/v0.2/index.md)
- [Public knowledge skill](skills/tokenizart-public-knowledge/SKILL.md)
- [Gallery traceability skill](skills/tokenizart-gallery-traceability/SKILL.md)
- [Demo Atelier skill](skills/tokenizart-demo-atelier/SKILL.md)
- [MCP preview](mcp/server.preview.json)
- [Artifact index](artifacts/index.json)
- [API and MCP terms](API-TERMS.md)
- [Commercial and white-label licensing](COMMERCIAL-LICENSING.md)
- [Commercial integration policy contract](contracts/tokenizart-commercial-integration-policy.v1.json)
- [Public Atelier action guides](docs/ACTION-GUIDES.es.md)
- [Machine-readable action guide contract](contracts/tokenizart-public-action-guides.v1.json)
- [Commercial onboarding scope form](docs/COMMERCIAL-ONBOARDING.es.md)
- [Commercial onboarding intake schema](contracts/tokenizart-commercial-onboarding-intake.v1.schema.json)
- [Data and asset rights](DATA-AND-ASSETS-POLICY.md)
