---
name: tokenizart-atelier-certify
description: Use when Explain Certify as an owner request and certifier action on a minted artwork, including evidence, actor voucher, wallet confirmation and result checks.
---

# Certify in Atelier

Access: Nivel 5 explanation. Requests, evidence and account status are private. Mode: read-only.

## Clarify the actor

If the person says “hacer un certificado”, ask whether they want to request one from a contact, perform one they received, understand existing certifications, or see what is pending. Route to the relevant step; do not assume Certify means Mint or a generic PDF certificate.

## Explain the verified general flow

1. Certify concerns an already minted artwork. The owner requests it and chooses the certifier and type in Atelier.
2. The certifier can be the owner or an invited contact. They review the request, describe the fact and attach supporting evidence as allowed by the current form.
3. The actor who performs Certify uses the applicable voucher and confirms with their own wallet credential inside Atelier.
4. Verify the resulting status and linked evidence. A pending request is not a completed on-chain Certify; Certify adds a reference to the existing token history and does not create another NFT or transfer ownership.

Sources: [Certify action](https://github.com/tokenizartinfo-ops/tokenizart-agentic/blob/main/okf/v0.2/03-Atelier/Actions/Certify.md), [Certify microsteps](https://github.com/tokenizartinfo-ops/tokenizart-agentic/blob/main/okf/v0.2/03-Atelier/Micro-Steps/Certify-Micro-Steps.md), [public manual, pages 84–89](https://tokenizart.com/wp-content/uploads/2024/04/Atelier-Manual-del-Usuario-1.pdf#page=84), [official Shop](https://tokenizart.com/es/shop/).

The catalog of Certify types and exact control labels in the manual need current-screen confirmation. This skill cannot inspect a private request, upload evidence, consume a voucher or sign.

Never execute Mint, Certify, transfers, voucher changes, privacy changes,
NFC binding, uploads or wallet signing.
