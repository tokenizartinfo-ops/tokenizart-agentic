---
type: Knowledge Concept
title: "Manual Atelier Validation 2026-06-05"
resource: "urn:tokenizart:knowledge:03-Atelier/User-Manuals/Manual-Atelier-Validation-2026-06-05"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-05T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-05T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/User-Manuals/Manual-Atelier-Validation-2026-06-05.md"
    title: "Manual Atelier Validation 2026-06-05"
    author: team:tokenizart
    last_modified: 2026-06-05
  - id: original-public-source
    resource: "https://drive.google.com/file/d/1WbGdALF7bb84MlO1_dC3Mzj3wXv7DdOG/view?usp=drivesdk"
    title: "Original public source"
    last_modified: 2026-06-05
source-sha256: bdb287b71c0bd08c674e287297a470ac87454cccfc8265044159c5d5b54f4cc7
---

# Manual Atelier Validation 2026-06-05

Revision controlada de las primeras secciones operativas del manual Atelier para habilitar indexacion RAG/Gbrain sobre contenido `verified`.

## Notas promovidas a verified

- [Carga-de-Obra](../Actions/Carga-de-Obra.md)
- [Mint](../Actions/Mint.md)
- [Vinculacion-Chip-NFC](../Actions/Vinculacion-Chip-NFC.md)
- [Certify](../Actions/Certify.md)
- [Venta-y-Transferencia](../Actions/Venta-y-Transferencia.md)

## Alcance

La verificacion cubre el flujo operativo general extraido del manual Atelier y sus notas visuales asociadas.

No cubre:

- nombres exactos de botones en la plataforma activa;
- cambios recientes de UI posteriores al manual;
- completitud del catalogo de acciones Certify;
- modelos exactos de chip NFC;
- relacion comercial/e-commerce de transferencia.

## Decision

Las notas operativas pueden entrar al indice local Gbrain como contenido `verified` con alcance limitado. Las notas visuales del manual y el manifest multimodal permanecen como `needs_review` hasta validacion humana de pantalla por pantalla.

## Proxima accion

Ejecutar indexacion local Gbrain sobre `03-Atelier` y probar recuperacion por flujos `carga_obra`, `mint`, `chip`, `certify` y `venta`.
