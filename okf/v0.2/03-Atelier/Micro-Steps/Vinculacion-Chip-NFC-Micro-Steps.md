---
type: Knowledge Concept
title: "Vinculacion Chip NFC Micro-Steps"
resource: "urn:tokenizart:knowledge:03-Atelier/Micro-Steps/Vinculacion-Chip-NFC-Micro-Steps"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-14T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-14T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/Micro-Steps/Vinculacion-Chip-NFC-Micro-Steps.md"
    title: "Vinculacion Chip NFC Micro-Steps"
    author: team:tokenizart
    last_modified: 2026-06-14
  - id: original-public-source
    resource: "https://tokenizart.com/wp-content/uploads/2024/04/Atelier-Manual-del-Usuario-1.pdf"
    title: "Original public source"
    last_modified: 2026-06-14
source-sha256: 4e76315a6718faa52162ac8bb28f47e1394fb3a42894640d5d5ecef81a7a84b9
---

# Vinculacion Chip NFC Micro-Steps

Micro-pasos derivados de [Vinculacion-Chip-NFC](../Actions/Vinculacion-Chip-NFC.md) y [Manual-Chip-NFC](../User-Manuals/Manual-Chip-NFC.md).

## Solicitud desde web

| step_id | actor | screen_ref | image_ref | user_action | required_input | expected_result | review_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| chip.01 | owner | Administracion > Obras Propias | `atelier-manual-p074.png` | Seleccionar obra minteada a vincular | Obra minteada | Detalle de obra abierto | verified_general_flow |
| chip.02 | owner | Detalle obra | `atelier-manual-p074.png` | Presionar `Certificar` | Obra minteada | Modal `Certificar Obra` abierto | verified_general_flow |
| chip.03 | owner | Certificar Obra | `atelier-manual-p075.png` | Seleccionar certificador | Certificador agendado o owner | Certificador asociado a solicitud | verified_general_flow |
| chip.04 | owner | Certificar Obra | `atelier-manual-p075.png` | Seleccionar tipo `Vinculacion NFC` | Tipo disponible | Solicitud configurada como vinculacion NFC | verified_general_flow |
| chip.05 | owner | Confirmacion solicitud | `atelier-manual-p075.png` | Enviar/confirmar solicitud | Datos completos | Solicitud enviada | verified_general_flow |
| chip.06 | sistema | Certificaciones solicitadas/recibidas | `atelier-manual-p076.png` | Mostrar solicitud pendiente | Solicitud creada | Certificador puede completarla | verified_general_flow |

## Ejecucion desde app/certificador

| step_id | actor | screen_ref | image_ref | user_action | required_input | expected_result | review_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| chip.07 | certificador | App movil Tokenizart | `atelier-manual-p077.png` | Iniciar sesion en app | Credenciales | Home/app disponible | verified_general_flow |
| chip.08 | certificador | Certificaciones pendientes | `atelier-manual-p077.png` | Abrir solicitud NFC pendiente | Solicitud recibida | Detalle de certificacion abierto | verified_general_flow |
| chip.09 | certificador | Vincular NFC | `atelier-manual-p078.png` | Presionar accion de vinculacion NFC | Chip fisico disponible | App solicita acercar movil al chip | verified_general_flow |
| chip.10 | certificador | Lectura NFC | `atelier-manual-p078.png` | Acercar movil al chip fisico | NFC activo y chip Tokenizart | Chip leido/codificado | verified_general_flow |
| chip.11 | certificador | Resultado app | `atelier-manual-p079.png` | Confirmar lectura o revisar error | Resultado de lectura | Certificacion lista para cierre web | verified_general_flow |
| chip.12 | certificador | Estados NFC | `atelier-manual-p082.png` | Interpretar estado del chip | Chip leido | Estado detectado: disponible, no apto, falso/clonado o ya vinculado | verified_general_flow |

## Cierre blockchain

| step_id | actor | screen_ref | image_ref | user_action | required_input | expected_result | review_status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| chip.13 | owner/certificador | Certificaciones Recibidas / Taggeadas | `atelier-manual-p080.png` | Abrir certificacion NFC completada | Solicitud procesada por app | Modal de cierre disponible | verified_general_flow |
| chip.14 | owner/certificador | Confirmacion wallet | `atelier-manual-p080.png` | Ingresar contrasena de wallet | Contrasena wallet | Transaccion habilitada | verified_general_flow |
| chip.15 | sistema | Blockchain / historial obra | `atelier-manual-p081.png` | Registrar vinculacion | Transaccion aceptada | Obra fisica vinculada al token/chip | verified_general_flow |

## Failure modes

- Obra no minteada.
- Certificador no agendado.
- App movil no disponible o sin NFC activo.
- Chip virgen/generico no apto para Tokenizart.
- Chip falso, clonado o ya vinculado.
- Contrasena wallet incorrecta.

## Gbrain index policy

Indexar como `verified` con `flow_id: chip`. Para respuestas finales, recuperar tambien [Vinculacion-Chip-NFC](../Actions/Vinculacion-Chip-NFC.md).

## Alcance production

Estos micro-pasos quedan verificados como flujo general publico `Nivel 5`, por correspondencia con la nota de accion verificada y el Manual Atelier. Pueden entrar al store `production` para soporte, educacion y chatbot publico.

Reservas: no usar esta nota para afirmar disponibilidad exacta de botones, nombres de pantallas, estados vivos, costos, tiempos o comportamiento transaccional sin contraste posterior contra Atelier activo. Si una fuente nueva contradice estos pasos, crear alerta Fix-Center antes de reemplazar la version canonica.
