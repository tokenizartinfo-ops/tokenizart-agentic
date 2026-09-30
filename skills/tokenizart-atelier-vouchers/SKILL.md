---
name: tokenizart-atelier-vouchers
description: Use when Explain Tokenizart voucher types, where to inspect current Shop offers and how a signed-in user checks their own credited balance in Atelier.
---

# Vouchers and Shop

Access: Nivel 5 for Shop guidance; personal voucher balance is Nivel 4. Mode: read-only.

## Route the question

- For current products, availability, currency and price, open the official [Shop](https://tokenizart.com/es/shop/) and the relevant live product page. Do not quote a historical price as current.
- [Mint voucher](https://tokenizart.com/product/voucher-mint/) enables one Mint action; batch Mint needs a voucher per artwork according to the public manual.
- [Certify voucher](https://tokenizart.com/product/voucher-certify/) belongs to the actor who actually performs Certify.
- [Chip/NFC voucher](https://tokenizart.com/product/vinculacion-a-chip/) belongs to the applicable binding flow.
- [Starter Kit](https://tokenizart.com/product/starter-kit/) is a separate package; verify its current contents and terms in its product page.
- Transfer is documented as not consuming a voucher. Do not infer that another fee or external-wallet consequence is impossible.

The Shop is for acquisition, not a display of the user's balance. After a purchase, guide the person to check the credited vouchers in their signed-in Atelier account before starting an action. If a credit is missing, ask for the order reference and visible status through an appropriate private support channel; never take card details or infer that the payment succeeded.

Sources: [official Shop](https://tokenizart.com/es/shop/), [public action guide](https://github.com/tokenizartinfo-ops/tokenizart-agentic/blob/main/docs/ACTION-GUIDES.es.md), [Mint concept](https://github.com/tokenizartinfo-ops/tokenizart-agentic/blob/main/okf/v0.2/03-Atelier/Actions/Mint.md), [Certify concept](https://github.com/tokenizartinfo-ops/tokenizart-agentic/blob/main/okf/v0.2/03-Atelier/Actions/Certify.md).

This skill cannot purchase, credit, assign or inspect a person's vouchers. A public LLM cannot know the balance; Copilot requires a live authorized owner connection to answer it.

Never execute Mint, Certify, transfers, voucher changes, privacy changes,
NFC binding, uploads or wallet signing.
