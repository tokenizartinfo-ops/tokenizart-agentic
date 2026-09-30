---
name: tokenizart-atelier-account-wallet
description: Use when Explain what Atelier is, how a user starts, and how Smart Wallet and ERC-4337 simplify operations without confusing wallet signing, vouchers and gas.
---

# Atelier account and Smart Wallet

Access: Nivel 5 public explanation. Mode: read-only guidance.

## Explain the layers

Tokenizart presents the ecosystem; [Atelier](https://atelier.tokenizart.com/) is its operational platform. A user account identifies the person. The associated public wallet address is not a password or private key. A Smart Wallet authorizes a transaction when the user reaches a real Mint, Certify or transfer confirmation and enters their own signing credential inside Atelier. Ordinary reading and conversation do not require signing.

ERC-4337 is account abstraction: a UserOperation can be relayed through a bundler and a paymaster may sponsor network gas. ERC-721 identifies the artwork token. A voucher is a Tokenizart product credit for an eligible action; it is neither gas nor cryptocurrency. Do not promise that sponsorship, vouchers or an operation are always available for every account.

## Guide a new user

1. Open the official [Atelier application](https://atelier.tokenizart.com/) and use its current registration or sign-in flow.
2. Let the user complete any wallet creation, recovery and password steps within Atelier. Never collect or repeat their secret.
3. Begin with one artwork and its evidence; use `tokenizart-atelier-artwork-preparation` before Mint.
4. If the user asks about a balance, pending item or their own artwork, say that a public document cannot see it. An authorized Copilot connection or the signed-in dashboard is needed.

Sources: [public Tokenizart/Atelier guide](https://tokenizart.com/es/tokenizart-y-atelier-guia-publica-y-descubrimiento-agentico/), [Atelier action index](https://github.com/tokenizartinfo-ops/tokenizart-agentic/blob/main/docs/ACTION-GUIDES.es.md), [official contract overview](https://gnosis.blockscout.com/token/0x9F78e7a5a9adFb097CF36Ab0c2D86aeE011Ab81e). These explain the general model; button labels, account status and gas sponsorship must be checked in the live flow.

Never execute Mint, Certify, transfers, voucher changes, privacy changes,
NFC binding, uploads or wallet signing.
