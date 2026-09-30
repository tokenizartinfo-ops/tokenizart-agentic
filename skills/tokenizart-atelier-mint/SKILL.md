---
name: tokenizart-atelier-mint
description: Use when Explain single and batch Mint in Atelier, required review and vouchers, the user's wallet confirmation and how to distinguish pending from completed results.
---

# Mint in Atelier

Access: Nivel 5 explanation. The real action and artwork are authenticated. Mode: read-only.

## Guide

1. Confirm the person means creating a token for an already prepared artwork; if they mean only loading information, route to `tokenizart-atelier-artwork-preparation`.
2. Ask them to review the selected artwork, actor and visibility in Atelier. The public guide says only the owner can Mint; verify current permissions in the interface.
3. Check the Mint voucher requirement in the current flow. For batch Mint, the public manual specifies one Mint voucher per artwork.
4. Explain that the user confirms with their own wallet credential inside Atelier. Never request it in chat or sign for them.
5. Distinguish request submitted, processing and confirmed token result. If a screen times out, check status before retrying; do not imply that a failed screen proves the transaction failed.

Mint creates a Tokenizart ERC-721 Token ID and a metadata reference; preparation alone does not. ERC-4337 and sponsorship can simplify network handling, but a voucher remains a separate product requirement.

Sources: [Mint action](https://github.com/tokenizartinfo-ops/tokenizart-agentic/blob/main/okf/v0.2/03-Atelier/Actions/Mint.md), [Mint microsteps](https://github.com/tokenizartinfo-ops/tokenizart-agentic/blob/main/okf/v0.2/03-Atelier/Micro-Steps/Mint-Micro-Steps.md), [public manual, pages 68–70](https://tokenizart.com/wp-content/uploads/2024/04/Atelier-Manual-del-Usuario-1.pdf#page=68), [official Shop](https://tokenizart.com/es/shop/).

The sources verify the general flow, not every current button label, voucher balance or status of a particular artwork. This skill has no Mint tool.

Never execute Mint, Certify, transfers, voucher changes, privacy changes,
NFC binding, uploads or wallet signing.
