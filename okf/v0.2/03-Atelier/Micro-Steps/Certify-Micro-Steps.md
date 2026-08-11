---
type: Knowledge Concept
title: "Certify Micro-Steps"
resource: "urn:tokenizart:knowledge:03-Atelier/Micro-Steps/Certify-Micro-Steps"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-14T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-14T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/Micro-Steps/Certify-Micro-Steps.md"
    title: "Certify Micro-Steps"
    author: team:tokenizart
    last_modified: 2026-06-14
  - id: original-public-source
    resource: "https://tokenizart.com/wp-content/uploads/2024/04/Atelier-Manual-del-Usuario-1.pdf"
    title: "Original public source"
    last_modified: 2026-06-14
source-sha256: 4e4ce1a71d66364e4719bd1e579d223d116f879ea22ca82e961ed4b91ef5dbe7
---

# Certify Micro-Steps

Micro-pasos derivados de [Certify](../Actions/Certify.md) y [Manual-Certify](../User-Manuals/Manual-Certify.md).

## Solicitud

| step_id | actor | screen_ref | image_ref | user_action | required_input | expected_result | review_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| certify.01 | owner | Administracion > Obras Propias | `atelier-manual-p085.png` | Seleccionar obra minteada | Obra minteada | Detalle de obra abierto | verified_general_flow |
| certify.02 | owner | Detalle obra | `atelier-manual-p085.png` | Presionar `Certificar` | Permiso owner | Modal `Certificar Obra` abierto | verified_general_flow |
| certify.03 | owner | Certificar Obra | `atelier-manual-p087.png` | Seleccionar certificador | Certificador pertinente y agendado | Certificador asociado | verified_general_flow |
| certify.04 | owner | Certificar Obra | `atelier-manual-p087.png` | Seleccionar tipo de certificacion | Catalogo disponible | Tipo de Certify asociado | verified_general_flow |
| certify.05 | owner | Certificar Obra | `atelier-manual-p087.png` | Enviar solicitud | Datos completos | Pantalla de confirmacion | verified_general_flow |
| certify.06 | owner | Confirmar Solicitud | `atelier-manual-p087.png` | Confirmar solicitud | Decision confirmada | Solicitud enviada exitosamente | verified_general_flow |

## Ejecucion por certificador

| step_id | actor | screen_ref | image_ref | user_action | required_input | expected_result | review_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| certify.07 | certificador | Certificaciones Recibidas | `atelier-manual-p088.png` | Abrir solicitud pendiente | Solicitud recibida | Formulario de certificacion abierto | verified_general_flow |
| certify.08 | certificador | Formulario Certify | `atelier-manual-p089.png` | Completar descripcion | Descripcion de certificacion | Descripcion asociada | verified_general_flow |
| certify.09 | certificador | Formulario Certify | `atelier-manual-p089.png` | Adjuntar documentacion | JPG, PNG o PDF hasta 50 MB por archivo segun fuente | Evidencia documental agregada | verified_general_flow |
| certify.10 | certificador | Confirmacion wallet | `atelier-manual-p089.png` | Ingresar contrasena de wallet | Voucher si aplica + contrasena | Transaccion habilitada | verified_general_flow |
| certify.11 | certificador | Confirmacion blockchain | `atelier-manual-p089.png` | Confirmar certificacion | Datos revisados | Certificacion registrada | verified_general_flow |
| certify.12 | sistema | Historial/comprobante | `atelier-manual-p089.png` | Mostrar comprobante | Transaccion completada | Certify visible en historial de obra | verified_general_flow |

## Failure modes

- Obra no minteada.
- Certificador no agendado.
- Tipo de certificacion no corresponde al certificador.
- Falta voucher o permisos.
- Archivo excede limite.
- Contrasena wallet incorrecta.
- Catalogo de certificaciones desactualizado.

## Gbrain index policy

Indexar como `verified` con `flow_id: certify`. Para respuestas finales, recuperar tambien [Certify](../Actions/Certify.md).

## Alcance production

Estos micro-pasos quedan verificados como flujo general publico `Nivel 5`, por correspondencia con la nota de accion verificada y el Manual Atelier. Pueden entrar al store `production` para soporte, educacion y chatbot publico.

Reservas: no usar esta nota para afirmar disponibilidad exacta de botones, nombres de pantallas, estados vivos, costos, tiempos o comportamiento transaccional sin contraste posterior contra Atelier activo. Si una fuente nueva contradice estos pasos, crear alerta Fix-Center antes de reemplazar la version canonica.
