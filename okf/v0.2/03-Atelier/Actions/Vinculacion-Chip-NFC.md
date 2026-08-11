---
type: Knowledge Concept
title: "Vinculacion Chip NFC"
resource: "urn:tokenizart:knowledge:03-Atelier/Actions/Vinculacion-Chip-NFC"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-05T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-05T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/Actions/Vinculacion-Chip-NFC.md"
    title: "Vinculacion Chip NFC"
    author: team:tokenizart
    last_modified: 2026-06-05
  - id: original-public-source
    resource: "https://docs.google.com/document/d/1dkBFCu8dsifu1Vr7xA6FfE33kMor069Bv34b6cLw4Cw/edit?usp=drivesdk"
    title: "Original public source"
    last_modified: 2026-06-05
source-sha256: 32e448f96a689ab796b2c2ec828965e5793ff91a8c0032251656f50ec35a76db
---

# Vinculacion Chip NFC

## Objetivo

Vincular una obra fisica con su identidad digital mediante chip NFC.

## Precondiciones

- Obra ya minteada o con identidad digital disponible.
- Chip fisico disponible.
- App movil Tokenizart si el flujo lo requiere.
- Permisos suficientes sobre la obra.

## Resultado esperado

Chip NFC asociado a la obra/token para facilitar verificacion fisico-digital.

## Reglas del manual

- La obra debe estar minteada.
- Se requiere chip fisico del Toolbox.
- Se requiere App movil de TokenizArt.
- La accion se gestiona como un Certify de vinculacion NFC.
- Intervienen solicitante y certificador; pueden ser la misma persona.
- Si el certificador es tercero, debe estar agendado como contacto.

## Flujo resumido

1. Web: owner selecciona obra minteada en `Obras Propias`.
2. Web: selecciona `Certificar`.
3. Web: selecciona certificador.
4. Web: selecciona `Vinculacion NFC`.
5. App: certificador inicia sesion.
6. App: va a certificaciones pendientes.
7. App: selecciona obra y presiona `Vincular NFC`.
8. App: acerca el movil al chip fisico.
9. Web: vuelve a `Certificaciones Recibidas / Taggeadas`.
10. Web: confirma con contrasena de wallet.
11. Blockchain: queda registrada la vinculacion.

## Estados de chip NFC

- Disponible y listo para vincular.
- No codificado / virgen / tag generico, no apto para TokenizArt.
- Falso o clonado, no coincide con encriptacion TokenizArt.
- Ya vinculado a una obra.

## Pendiente de validacion

Validar modelos de chip y estados exactos en la app movil.

## Alcance de verificacion

Verificado como flujo operativo general contra el manual Atelier y la nota [Manual-Chip-NFC](../User-Manuals/Manual-Chip-NFC.md). Modelos de chip, nombres exactos de estados y pantallas de app movil siguen pendientes de validacion operativa.
