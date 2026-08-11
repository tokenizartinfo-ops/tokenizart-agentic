---
type: Knowledge Concept
title: "Venta y Transferencia Micro-Steps"
resource: "urn:tokenizart:knowledge:03-Atelier/Micro-Steps/Venta-y-Transferencia-Micro-Steps"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-16T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-16T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/Micro-Steps/Venta-y-Transferencia-Micro-Steps.md"
    title: "Venta y Transferencia Micro-Steps"
    author: team:tokenizart
    last_modified: 2026-06-16
  - id: original-public-source
    resource: "https://tokenizart.com/wp-content/uploads/2024/04/Atelier-Manual-del-Usuario-1.pdf"
    title: "Original public source"
    last_modified: 2026-06-16
source-sha256: e2de056fd6c4267f7987d9e7b548cfcefb93e91c0dde75f8b4fe120d5b72aaf7
---

# Venta y Transferencia Micro-Steps

Micro-pasos derivados de [Venta-y-Transferencia](../Actions/Venta-y-Transferencia.md) y [Manual-Transfer](../User-Manuals/Manual-Transfer.md).

## Transferencia a usuario Tokenizart

| step_id | actor | screen_ref | image_ref | user_action | required_input | expected_result | review_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| transfer.01 | owner | Administracion > Obras Propias | `atelier-manual-p091.png` | Seleccionar obra minteada | Obra minteada | Detalle de obra abierto | verified_general_flow |
| transfer.02 | owner | Detalle obra | `atelier-manual-p092.png` | Presionar `Transferir` | Permiso owner | Modal de transferencia abierto | verified_general_flow |
| transfer.03 | owner | Transferir obra | `atelier-manual-p092.png` | Ingresar email destinatario Tokenizart | Email valido | Wallet del destinatario visible | verified_general_flow |
| transfer.04 | owner | Transferir obra | `atelier-manual-p093.png` | Verificar destinatario y wallet | Destinatario correcto | Boton de confirmacion habilitado | verified_general_flow |
| transfer.05 | owner | Confirmacion wallet | `atelier-manual-p094.png` | Ingresar contrasena de wallet | Contrasena wallet | Transaccion preparada | verified_general_flow |
| transfer.06 | owner | Confirmacion transferencia | `atelier-manual-p094.png` | Confirmar transferencia | Decision confirmada | Proceso blockchain iniciado | verified_general_flow |
| transfer.07 | sistema | Resultado | `atelier-manual-p095.png` | Mostrar confirmacion o error | Transaccion procesada | Titularidad transferida o error visible | verified_general_flow |

## Transferencia fuera de Atelier

| step_id | actor | screen_ref | image_ref | user_action | required_input | expected_result | review_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| transfer_ext.01 | owner | Transferir obra | `atelier-manual-p095.png` | Elegir wallet externa si aplica | Wallet externa valida | Advertencia operativa requerida | verified_general_flow |
| transfer_ext.02 | owner | Confirmacion externa | `atelier-manual-p095.png` | Confirmar envio fuera de plataforma | Decision consciente | Obra deja de ser gestionable desde Atelier si sale del ecosistema | verified_general_flow |

## Failure modes

- Obra no minteada.
- Email incorrecto.
- Wallet destinataria no visible.
- Boton inactivo por datos incompletos.
- Contrasena wallet incorrecta.
- Transferencia externa irreversible o fuera de gestion Atelier.
- Ambiguedad pendiente: venta comercial/e-commerce vs transferencia de titularidad.

## Gbrain index policy

Indexar como `verified` con `flow_id: venta`. Para respuestas finales, recuperar tambien [Venta-y-Transferencia](../Actions/Venta-y-Transferencia.md).

## Alcance production

Estos micro-pasos quedan verificados como flujo general publico `Nivel 5`, por correspondencia con la nota de accion verificada, el Manual Atelier y la extraccion NotebookLM del cuaderno `Manual de Usuario TokenizArt Atelier`.

Reservas: no usar esta nota para afirmar disponibilidad exacta de botones, nombres de pantallas, estados vivos, costos, tiempos, venta comercial/e-commerce ni comportamiento transaccional sin contraste posterior contra Atelier activo. Si una fuente nueva contradice estos pasos, crear alerta Fix-Center antes de reemplazar la version canonica.
