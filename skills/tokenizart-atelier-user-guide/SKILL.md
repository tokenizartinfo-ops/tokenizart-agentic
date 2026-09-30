---
name: tokenizart-atelier-user-guide
description: Use when Route a person's Atelier question to the right verified public guide, skill or authenticated Copilot without claiming account access or action execution.
---

# Atelier user guide router

Access: Nivel 5. Mode: read-only. A user may be signed in to Atelier, but loading this file does not authenticate an LLM.

## Select the task

| The person wants to… | Use |
| --- | --- |
| Understand Tokenizart, identity, audience or the difference between the site and Atelier | `tokenizart-public-knowledge` |
| Learn account setup, Smart Wallet and ERC-4337 simplification | `tokenizart-atelier-account-wallet` |
| Prepare or edit an artwork before tokenization | `tokenizart-atelier-artwork-preparation` |
| Find, buy or understand vouchers | `tokenizart-atelier-vouchers` |
| Understand Mint or batch Mint | `tokenizart-atelier-mint` |
| Request or perform Certify | `tokenizart-atelier-certify` |
| Understand NFC binding | `tokenizart-atelier-nfc` |
| Understand a transfer | `tokenizart-atelier-transfer` |
| Decide what Gallery visitors can see | `tokenizart-atelier-visibility` |
| Inspect a specific public artwork or proof | `tokenizart-gallery-traceability` |
| Practise without using a real account | `tokenizart-demo-atelier` |

For contacts, managers, documents, errors or a screen-specific question not covered by a verified guide, identify the exact task and consult the live Atelier interface with the user's permission. Do not invent a button, balance, pending request or outcome. If several meanings remain, ask one focused question.

## Ground every answer

Start with the [public human guide](https://tokenizart.com/es/tokenizart-y-atelier-guia-publica-y-descubrimiento-agentico/) and the [public action guide index](https://github.com/tokenizartinfo-ops/tokenizart-agentic/blob/main/docs/ACTION-GUIDES.es.md). Use the specialized skill's sources for the requested action. Give one next step, explain why, and distinguish preparation, user confirmation, processing and verified completion.

Companion 5 explains public information. [Copilot 4](https://companion.tokenizart.info/internal/level4-copilot) is a separate application for signed-in users; it may read only the owner information exposed by a live authorized connection. Neither this skill nor a hyperlink extends its permissions.

Never ask for a password, wallet secret, recovery phrase, session cookie or payment-card number. Never claim to execute Mint, Certify, NFC, transfer, voucher assignment, privacy changes, uploads or wallet signing. The user enters any signing credential in Atelier at the platform's confirmation step.

Never execute Mint, Certify, transfers, voucher changes, privacy changes,
NFC binding, uploads or wallet signing.
