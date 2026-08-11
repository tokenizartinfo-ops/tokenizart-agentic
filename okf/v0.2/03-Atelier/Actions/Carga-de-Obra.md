---
type: Knowledge Concept
title: "Carga de Obra"
resource: "urn:tokenizart:knowledge:03-Atelier/Actions/Carga-de-Obra"
tags:
  - "tokenizart"
status: stable
generated: { by: tokenizart-hermes/0.1.0, at: 2026-06-05T00:00:00Z }
verified: { by: process:tokenizart-curation, at: 2026-06-05T00:00:00Z }
sources:
  - id: tokenizart-canonical-note
    resource: "tokenizart-brain/03-Atelier/Actions/Carga-de-Obra.md"
    title: "Carga de Obra"
    author: team:tokenizart
    last_modified: 2026-06-05
  - id: original-public-source
    resource: "https://docs.google.com/document/d/1UsnGVsBFAsnJeRRFFNIOdILoxUfOpoNXIsPw6i8xbnU/edit?usp=drivesdk"
    title: "Original public source"
    last_modified: 2026-06-05
source-sha256: 273e8ae5387a12e11e7b5de797e07e7ee96c3d7d388550ca6b7f000bd4d18433
---

# Carga de Obra

## Objetivo

Registrar una obra u objeto en Atelier mediante datos principales, ficha tecnica, imagenes y documentacion asociada.

## Precondiciones

- Usuario registrado en Atelier.
- Datos minimos de la obra disponibles.
- Documentacion o anexos disponibles si corresponden.

## Inputs esperados

- Titulo. Es el unico dato obligatorio segun la fuente de carga de obras.
- Autor.
- Descripcion de hasta 500 caracteres.
- Imagen principal.
- Imagenes secundarias.
- Visibilidad en galeria publica.
- Tecnica.
- Dimensiones.
- Anio de creacion.
- Tematica.
- Valor estimado.

## Resultado esperado

Obra cargada en el panel de administracion, editable y preparada para revision previa a Mint.

## Pasos

1. Ingresar al Atelier en Administracion.
2. Ir a `Obras Propias` si actua el owner o `Obras Gestionadas` si actua un gestor.
3. Cargar datos principales.
4. Completar ficha tecnica.
5. Guardar cambios.
6. Revisar visualizacion y editar si corresponde.

## Modo gestor

El gestor puede cargar obras para propietarios que lo hayan autorizado previamente. Las obras cargadas por el gestor se visualizan por el propietario en su panel de obras propias. El gestor no puede ejecutar Mint.

## Pendiente de validacion

Validar campos exactos de formulario y nombres UI contra la plataforma activa.

## Alcance de verificacion

Verificado como flujo operativo general contra el manual Atelier y la [guia publica de carga de obra](../../../../docs/action-guides/CARGA-DE-OBRA.es.md). Los nombres exactos de botones/campos de la plataforma activa siguen pendientes de confirmacion.
