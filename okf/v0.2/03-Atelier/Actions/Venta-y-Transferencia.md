---
type: Knowledge Concept
title: "Venta y Transferencia"
resource: "urn:tokenizart:knowledge:03-Atelier/Actions/Venta-y-Transferencia"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-05T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-05T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/Actions/Venta-y-Transferencia.md"
    title: "Venta y Transferencia"
    author: team:tokenizart
    last_modified: 2026-06-05
  - id: original-public-source
    resource: "https://drive.google.com/file/d/1WbGdALF7bb84MlO1_dC3Mzj3wXv7DdOG/view?usp=drivesdk"
    title: "Original public source"
    last_modified: 2026-06-05
source-sha256: 407184622406308e438f6e7aca85557f926140379413cd44654deab31596cdf9
---

# Venta y Transferencia

## Objetivo

Transferir la propiedad de una obra minteada a un tercero, registrando la transaccion en blockchain.

## Reglas del manual

- Solo se pueden transferir obras minteadas.
- El owner inicia la accion desde `Obras Propias`.
- La transferencia puede ser a otro usuario TokenizArt mediante email o a una wallet externa.
- Si se transfiere fuera de la plataforma, la informacion permanece en Blockchain/IPFS pero deja de ser gestionable desde Atelier.

## Pasos

1. Entrar en Administracion.
2. Ir a `Obras Propias`.
3. Seleccionar obra minteada.
4. Presionar `Transferir`.
5. Cargar email del destinatario TokenizArt.
6. Verificar que aparece su wallet.
7. Ingresar contrasena de wallet.
8. Confirmar transaccion.
9. Esperar confirmacion blockchain.

## Errores frecuentes

- Email incorrecto.
- Wallet no visible.
- Boton de confirmacion inactivo por datos incompletos o incorrectos.
- Riesgo operativo de transferencia a wallet externa fuera del ecosistema Atelier.

## Pendiente de validacion

Validar si hay relacion con procesos de venta comercial/e-commerce o solo transferencia de titularidad.

## Alcance de verificacion

Verificado como flujo operativo general contra el manual Atelier y la nota [Manual-Transfer](../User-Manuals/Manual-Transfer.md). La relacion con venta comercial/e-commerce queda pendiente de validacion adicional.
