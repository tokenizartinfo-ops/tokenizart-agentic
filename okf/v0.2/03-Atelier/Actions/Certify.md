---
type: Knowledge Concept
title: "Certify"
resource: "urn:tokenizart:knowledge:03-Atelier/Actions/Certify"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-05T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-05T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/Actions/Certify.md"
    title: "Certify"
    author: team:tokenizart
    last_modified: 2026-06-05
  - id: original-public-source
    resource: "https://docs.google.com/document/d/1EjubeEapQ3mQ-JUzQeZjveZZrd08kFmO6nrGMZgVJbY/edit?usp=drivesdk"
    title: "Original public source"
    last_modified: 2026-06-05
source-sha256: ef8f917488718609ab278de9a73da8077775f5c1b0f592cc6c2aed583ac0b6a6
---

# Certify

## Objetivo

Agregar una certificacion, documento o acto verificable asociado a una obra.

## Precondiciones

- Obra existente en Atelier.
- Permisos suficientes para certificar.
- Documentacion o descripcion de certificacion.
- Voucher disponible si aplica.

## Resultado esperado

Certificacion incorporada al historial de la obra, con trazabilidad y fuente verificable.

## Reglas del manual

- Certify solo puede realizarse sobre obras minteadas.
- Solo el owner puede solicitar acciones de Certify.
- El certificador puede ser el owner o un tercero agendado como contacto.
- El voucher lo consume quien ejecuta la certificacion.
- La documentacion se adjunta al proceso y puede quedar asociada a IPFS.
- La accion se registra en blockchain con contrasena de wallet.

## Roles

- Solicitante: owner que inicia la solicitud.
- Certificador: usuario que completa, adjunta documentacion y firma la transaccion.

## Pasos del solicitante

1. Entrar en Administracion.
2. Ir a `Obras Propias`.
3. Seleccionar obra minteada.
4. Presionar `Certificar`.
5. Seleccionar certificador.
6. Seleccionar tipo de certificacion.
7. Enviar y confirmar solicitud.

## Pasos del certificador

1. Ir a `Certificaciones Recibidas`.
2. Abrir solicitud pendiente.
3. Completar descripcion.
4. Adjuntar documentacion JPG, PNG o PDF, hasta 50 MB por archivo segun fuente.
5. Ingresar contrasena de wallet.
6. Confirmar certificacion.
7. Ver comprobante blockchain.

## Acciones vinculables

- COA emitido por autor.
- Derechos de autor.
- Autenticacion por tercero.
- Nota de curaduria/comisario.
- Ficha tecnica preexistente.
- Informes adicionales.
- Certificacion de exposicion.
- Regalias estipuladas.
- Acreditacion impositiva.
- Valuacion de obra.
- Plusvalias por ventas futuras.
- Certificado de subasta.
- Acreditacion de pericia.
- Obra en transito.
- Certificado de venta.
- Poliza de seguros.
- Derechos de propiedad incorporados.
- Reconocimiento mecenazgo.

## Pendiente de validacion

Validar si el catalogo de acciones vinculables esta completo y vigente en la plataforma activa.

## Alcance de verificacion

Verificado como flujo operativo general contra el manual Atelier y la nota [Manual-Certify](../User-Manuals/Manual-Certify.md). El catalogo de acciones vinculables debe confirmarse contra la plataforma activa antes de tratarlo como lista exhaustiva.
