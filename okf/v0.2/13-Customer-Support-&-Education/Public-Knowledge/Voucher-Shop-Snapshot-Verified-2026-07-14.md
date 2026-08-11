---
type: Reference
title: "Voucher Shop Snapshot Verified 2026-07-14"
resource: "urn:tokenizart:knowledge:13-Customer-Support-%26-Education/Public-Knowledge/Voucher-Shop-Snapshot-Verified-2026-07-14"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-08-01T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-08-01T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/13-Customer-Support-&-Education/Public-Knowledge/Voucher-Shop-Snapshot-Verified-2026-07-14.md"
    title: "Voucher Shop Snapshot Verified 2026-07-14"
    author: team:tokenizart
    last_modified: 2026-08-01
  - id: original-public-source
    resource: "https://tokenizart.com/es/shop/"
    title: "Original public source"
    last_modified: 2026-08-01
source-sha256: 388efafccea3362aabd1aa56d98816faedf40e19db9ce153517e79e764594f5d
---

# Voucher Shop Snapshot Verified 2026-07-14

Snapshot publico verificado contra el Shop oficial de Tokenizart el
2026-07-14.

## Precios visibles

| Producto | Precio visible |
| --- | ---: |
| Starter Kit | USD 20.00 |
| Voucher Certify | USD 8.00 |
| Voucher Mint | USD 8.00 |
| Voucher Chip | USD 10.00 |

## Starter Kit

La ficha publica oficial del Starter Kit, verificada el 2026-07-14 en
https://tokenizart.com/product/starter-kit/, informa estos componentes:

- 1 Voucher Mint;
- 2 Vouchers Certify;
- 1 Toolbox con chip NFC, etiqueta VOID con holograma de seguridad e
  instrucciones para colocacion.

Los vouchers Mint, Certify y Chip tambien aparecen como productos individuales
en el Shop. Esta distincion debe explicarse cuando una persona pregunta
genericamente cuanto cuesta usar Tokenizart: primero se informan los valores
publicos disponibles y despues se pregunta si quiere comparar el Starter Kit o
acciones por separado.

## Regla de respuesta

El Companion puede informar estos valores como snapshot fechado y debe enlazar
al Shop oficial como referencia final. No debe afirmar que los precios son
permanentes ni prometer disponibilidad, acreditacion, descuentos, reembolsos o
tiempos de entrega sin una verificacion live adicional.

Una pregunta de precio no debe sustituirse por una explicacion de gas. En los
flujos nativos, la abstraccion del gas y el consumo de vouchers son capas
distintas: el usuario puede no necesitar comprar cripto para operar y, a la vez,
necesitar el voucher correspondiente para Mint, Certify o NFC.

La regla funcional permanece separada del precio:

- Mint consume Voucher Mint.
- Certify consume Voucher Certify del actor ejecutante.
- NFC usa el voucher del flujo Chip/NFC correspondiente.
- Transfer/transferencia no consume voucher.

## Separacion Shop / usuario Atelier

- El Shop es la superficie publica para adquirir vouchers y consultar el precio
  vigente.
- Una vez acreditados, los vouchers se consultan dentro del usuario o area de
  vouchers autenticada de Atelier; el Shop no representa el saldo personal.
- El Companion puede explicar esta ubicacion, pero no debe afirmar cuantos
  vouchers tiene una persona si no recibio un owner context read-only vigente
  desde Atelier.
- La acreditacion, disponibilidad y tiempos no deben presentarse como
  automaticos si no existe verificacion live del caso.

## Revalidacion de compra - 2026-08-01

La navegacion humana del Shop y sus fichas oficiales confirmo estos enlaces
directos:

- Shop: https://tokenizart.com/es/shop/
- Starter Kit, USD 20.00: https://tokenizart.com/product/starter-kit/
- Voucher Mint, USD 8.00: https://tokenizart.com/product/voucher-mint/
- Voucher Certify, USD 8.00: https://tokenizart.com/product/voucher-certify/
- Voucher Chip/NFC, USD 10.00: https://tokenizart.com/product/vinculacion-a-chip/

El checkout publico mostro pago con tarjeta de credito o debito. Companion y
Copilot pueden informar el precio fechado, recomendar el producto apropiado y
derivar a estos enlaces; no reciben datos de tarjeta ni ejecutan el pago.

Regla conversacional: una pregunta como "cuanto cuesta", "como pago" o
"donde lo compro" se responde primero con producto, precio y enlace exactos.
Si el turno anterior identifico Voucher Mint, Certify o Chip/NFC, una pregunta
referencial conserva ese producto y no vuelve por defecto al Starter Kit.

La compra debe quedar acreditada en el usuario de Atelier antes de usar el
voucher. Sin contexto owner read-only vigente, el Companion no afirma saldo,
acreditacion ni disponibilidad personal.
