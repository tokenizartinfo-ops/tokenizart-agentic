# Roadmap: de orientación a tareas completas en Atelier

**Estado: plan, 2026-09-30.** Este documento no habilita funciones ni anuncia endpoints en producción. Las capacidades actuales y sus límites están en la [caja de herramientas](ATELIER-LLM-TOOLBOX.es.md) y en el [contrato de distribución](../contracts/agentic-public-distribution.v1.json).

## Objetivo

Que el usuario pueda pedir a Copilot o a su propia LLM tareas de Atelier en lenguaje natural, recibir una propuesta comprensible, delegar pasos permitidos y completar el proceso con verificación. El usuario mantiene el control de permisos, compras y firma de transacciones. El agente nunca recibe claves de wallet.

Cada función se entregará como un conjunto coherente: **skill** para intención y explicación, **contrato API/MCP** para herramientas y permisos, **CLI** para uso reproducible, **interfaz de confirmación** en Atelier/Copilot, pruebas de seguridad y documentación pública de estado. Publicar una skill antes que una herramienta es válido si se indica que solo orienta; anunciar ejecución sin herramienta probada, no.

| Bloque | Capacidad prevista | Criterio de cierre |
| --- | --- | --- |
| 0. Descubrimiento y orientación | Skills públicas por tarea, guías, lectura pública y demo sintética; CLI/MCP piloto de consulta | Fuentes y límites verificables; enlaces funcionales; ninguna herramienta pública puede mutar una cuenta. |
| 1. Contexto de usuario | Lectura autorizada de obras, certificaciones, contactos, gestores, vouchers, estados y acciones disponibles, según lo que exponga Atelier a ese usuario | Identidad, cuenta, alcance y consentimiento resueltos en servidor; autorización revocable y comprobada en **cada** lectura; datos correctos, trazables y sin cruce entre cuentas. |
| 2. Preparación asistida | Borradores y previsualizaciones para carga o edición de obras, Mint por lote, solicitudes de Certify, asociación NFC y transferencia | Contratos versionados `atelier.prepare.*`; ninguna preparación se confunde con ejecución; validación de campos, permisos, costos/vouchers y resultado esperado antes de confirmar. |
| 3. Acciones supervisadas | Guardar borradores, enviar solicitudes y ejecutar pasos autorizables mediante `atelier.execute.*`, de uno en uno o en flujos complejos | Permisos por acción y recurso, confirmación humana informada, idempotencia, auditoría, manejo de errores y verificación posterior; despliegue gradual y rollback por función. |
| 4. Transacción de wallet | Mint, Certify y transferencia tras la preparación y confirmación | La firma ocurre **solo en Atelier por el usuario**; el agente no solicita contraseña, clave privada ni frase de recuperación. Se distingue iniciada, pendiente y confirmada en cadena. |
| 5. Orquestación compleja | Combinar consultas, preparación, solicitudes, seguimiento y resolución de bloqueos en una conversación | Evaluaciones de punta a punta con cuentas de prueba y fallos reales; recuperación segura tras interrupciones; ninguna repetición automática de una transacción ambigua. |

## Orden por tareas

Empezar por consulta de cuenta y diagnóstico de «qué tengo / qué falta». Seguir con carga y corrección de obras, vouchers y preparación de Mint; después Certify, NFC, visibilidad y transferencias. Para cada tarea, definir entradas, actor y destinatario, precondiciones, vista previa, autorización, efecto, estado verificable, cancelación/compensación y tratamiento de fallos. Los flujos por lote reutilizan contratos de acciones individuales y muestran el alcance completo antes de confirmar.

El agente puede enseñar al usuario las palabras de trabajo que acuerden —«contactos», «pendientes», «obras listas»— pero debe aclarar ambigüedades y no transformar una frase vaga en una orden irreversible. La conversación debe poder decir qué vio, qué no pudo ver, qué recomienda, qué preparó y qué acción quedó pendiente de la persona.

## Distribución y operación

- Mantener una sola definición de capacidad por versión, compartida por Copilot, MCP y CLI. Las skills explican cuándo usarla y enlazan a evidencia; no duplican ni reemplazan las reglas del servidor.
- Distinguir Companion 5 público de Copilot 4 autenticado. Los agentes externos consumen únicamente herramientas publicadas para su nivel y sesión. Un enlace entre aplicaciones no transmite permisos.
- Habilitar cada función primero con fixtures sintéticos y pruebas negativas (cuenta ajena, consentimiento vencido, voucher insuficiente, doble envío, fallo de red, firma rechazada). Luego piloto acotado con usuario real autorizado, métricas y rollback.
- Enviar incidencias de funcionamiento al **Fix Center operativo** con identificadores opacos y mínimos datos necesarios; las decisiones de arquitectura/HITL permanecen en su Fix-Center separado.
- Publicar documentación de endpoint, skill y CLI solo cuando la capacidad respectiva exista y haya sido probada; actualizar el índice de descubrimiento y reauditar por origen sin buscar puntos a costa de seguridad.

El siguiente bloque técnico es inventariar los recursos reales que Owner Live expone hoy y definir un primer `atelier.prepare.*` de bajo riesgo con borrador y vista previa, sin ejecución. Ese inventario debe basarse en código, endpoints y pruebas actuales, no en este plan.
