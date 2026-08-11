---
type: Knowledge Concept
title: "Mint Micro-Steps"
resource: "urn:tokenizart:knowledge:03-Atelier/Micro-Steps/Mint-Micro-Steps"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-14T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-14T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/Micro-Steps/Mint-Micro-Steps.md"
    title: "Mint Micro-Steps"
    author: team:tokenizart
    last_modified: 2026-06-14
  - id: original-public-source
    resource: "https://tokenizart.com/wp-content/uploads/2024/04/Atelier-Manual-del-Usuario-1.pdf"
    title: "Original public source"
    last_modified: 2026-06-14
source-sha256: d10f553d68870d9b0d534458afbd00a7f780f1e28708e723d6704da1f9d7c786
---

# Mint Micro-Steps

Micro-pasos derivados de [Mint](../Actions/Mint.md) y [Manual-Mint](../User-Manuals/Manual-Mint.md).

## Flujo individual

| step_id | actor | screen_ref | image_ref | user_action | required_input | expected_result | review_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| mint.01 | owner | Administracion > Obras Propias | `atelier-manual-p068.png` | Identificar obra cargada y revisada | Obra existente | Obra seleccionable para minteo | verified_general_flow |
| mint.02 | owner | Obras Propias / detalle obra | `atelier-manual-p068.png` | Presionar accion de Mint/Mintear | Permiso owner | Modal `Mintear` abierto | verified_general_flow |
| mint.03 | owner | Modal Mintear | `atelier-manual-p069.png` | Revisar resumen de obra y voucher a consumir | Voucher Mint disponible | Resumen de operacion visible | verified_general_flow |
| mint.04 | owner | Modal Mintear | `atelier-manual-p069.png` | Ingresar contrasena de transacciones/wallet | Contrasena wallet | Campo de contrasena completo | verified_general_flow |
| mint.05 | owner | Modal Mintear | `atelier-manual-p069.png` | Presionar `Confirmar Minteo` | Voucher + contrasena | Dialogo de atencion/confirmacion | verified_general_flow |
| mint.06 | owner | Confirmacion | `atelier-manual-p069.png` | Aceptar inicio de minteo | Decision confirmada | Proceso blockchain iniciado | verified_general_flow |
| mint.07 | sistema | Progreso blockchain | `atelier-manual-p069.png` | Esperar sin salir ni volver atras | Operacion en curso | Confirmacion de exito o error | verified_general_flow |
| mint.08 | sistema | Resultado exito | `atelier-manual-p069.png` | Mostrar minteo exitoso y comprobante | Transaccion completada | Obra tokenizada | verified_general_flow |
| mint.09 | sistema | Resultado error | `atelier-manual-p069.png` | Mostrar error de minteo | Error de contrasena u operacion | Usuario debe revisar contrasena o contactar soporte | verified_general_flow |

## Mint por lote

| step_id | actor | screen_ref | image_ref | user_action | required_input | expected_result | review_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| mint_lote.01 | owner | Mint por lote | `atelier-manual-p070.png` | Seleccionar varias obras aptas | Obras cargadas y revisadas | Lote preparado | verified_general_flow |
| mint_lote.02 | owner | Mint por lote | `atelier-manual-p070.png` | Verificar vouchers disponibles | Un voucher por obra | Operacion habilitada si hay saldo suficiente | verified_general_flow |
| mint_lote.03 | owner | Mint por lote | `atelier-manual-p070.png` | Confirmar minteo por lote | Contrasena wallet | Minteos iniciados | verified_general_flow |
| mint_lote.04 | sistema | Resultado lote | `atelier-manual-p070.png` | Informar exito/error por obra | Procesamiento blockchain | Estado individual de cada obra actualizado | verified_general_flow |

## Failure modes

- Contrasena de wallet incorrecta.
- Falta de voucher Mint.
- Usuario abandona la pantalla antes de confirmacion.
- Error blockchain o demora de confirmacion.

## Gbrain index policy

Indexar como `verified` con `flow_id: mint`. Para respuestas finales, recuperar tambien [Mint](../Actions/Mint.md).

## Alcance production

Estos micro-pasos quedan verificados como flujo general publico `Nivel 5`, por correspondencia con la nota de accion verificada y el Manual Atelier. Pueden entrar al store `production` para soporte, educacion y chatbot publico.

Reservas: no usar esta nota para afirmar disponibilidad exacta de botones, nombres de pantallas, estados vivos, costos, tiempos o comportamiento transaccional sin contraste posterior contra Atelier activo. Si una fuente nueva contradice estos pasos, crear alerta Fix-Center antes de reemplazar la version canonica.
