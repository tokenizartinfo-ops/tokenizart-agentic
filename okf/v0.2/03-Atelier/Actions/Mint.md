---
type: Knowledge Concept
title: "Mint"
resource: "urn:tokenizart:knowledge:03-Atelier/Actions/Mint"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-05T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-05T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/Actions/Mint.md"
    title: "Mint"
    author: team:tokenizart
    last_modified: 2026-06-05
  - id: original-public-source
    resource: "https://drive.google.com/drive/u/2/search?q=parent:1SnotP2ww1kMaaLPa5sEyWQG1mffKgkUN"
    title: "Original public source"
    last_modified: 2026-06-05
source-sha256: d14d869490defb536cd6e068b447e444725eba684e29a457b8ceecff6d762ff8
---

# Mint

## Objetivo

Crear la identidad digital/token de una obra previamente cargada.

## Precondiciones

- Obra cargada y revisada.
- Usuario con permisos suficientes.
- Voucher o credito disponible si aplica.
- Wallet o cuenta abstracta disponible segun flujo de plataforma.

## Resultado esperado

Obra con token generado y datos de tokenizacion asociados para trazabilidad posterior.

## Reglas del manual

- Mint registra la obra en blockchain y le otorga un ID digital unico e irrepetible.
- Solo el owner puede mintear.
- La obra debe estar cargada y revisada.
- Se requiere contrasena de wallet.
- Se requiere voucher de Mint.
- En Mint por lote se requiere un voucher por cada obra.
- La operacion puede demorar; no debe abandonarse hasta recibir confirmacion.

## Pasos

1. Entrar en Administracion.
2. Ir a `Obras Propias`.
3. Seleccionar la obra a mintear.
4. Presionar `Mintear`.
5. Ingresar contrasena de wallet.
6. Aceptar e iniciar el proceso.
7. Esperar confirmacion.

## Errores frecuentes

- Contrasena de wallet incorrecta.
- Falta de vouchers de Mint.
- Interrupcion del proceso antes de confirmacion blockchain.

## Pendiente de validacion

Confirmar nombres exactos de botones en la plataforma activa.

## Alcance de verificacion

Verificado como flujo operativo general contra el manual Atelier y la nota [Manual-Mint](../User-Manuals/Manual-Mint.md). Los nombres exactos de botones y estados de UI siguen pendientes de confirmacion en la plataforma activa.
