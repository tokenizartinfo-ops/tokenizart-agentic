# Caja de herramientas para LLM: Tokenizart y Atelier

**Estado:** guía pública de distribución, 2026-09-30. Explica capacidades actuales y una ruta de desarrollo; no acredita por sí misma que un servicio esté desplegado.

Tokenizart.com es el sitio público; Atelier es la aplicación. Companion 5 responde sobre conocimiento público y Copilot 4 atiende a usuarios autenticados en otra aplicación. Los enlaces entre sitios no transportan autorización. Las [skills](../skills/README.md) enseñan a elegir fuentes y guiar a una persona; la [CLI](../README.md) y el [MCP preview](../mcp/server.preview.json) son interfaces técnicas separadas.

## Qué puede hacer un agente hoy

| Necesidad | Fuente o interfaz verificable | Límite |
| --- | --- | --- |
| Explicar la plataforma y rutas de usuario | [Guía pública](https://tokenizart.com/es/tokenizart-y-atelier-guia-publica-y-descubrimiento-agentico/), [capacidades](https://tokenizart.com/es/atelier-capacidades/), [skills por tarea](../skills/README.md) | Conocimiento público, sin datos de cuenta. |
| Guiar carga, Mint y Certify | [Guías de acciones](ACTION-GUIDES.es.md), [OKF Atelier](../okf/v0.2/03-Atelier/) y [manual público](https://tokenizart.com/wp-content/uploads/2024/04/Atelier-Manual-del-Usuario-1.pdf) | Los pasos generales no prueban que el usuario tenga saldo, permiso o una obra lista. |
| Buscar conocimiento, verificar trazabilidad pública o abrir demo | [CLI y comandos documentados](../README.md), [contrato CLI](../contracts/tokenizart-cli.v1.json), [MCP preview](../mcp/server.preview.json), [Demo Atelier](https://github.com/tokenizartinfo-ops/tokenizart-atelier-demo) | CLI local alfa; MCP piloto protegido. Lecturas públicas, sin ejecución. No confundir demo sintética con cuenta real. |
| Ver obras, vouchers, solicitudes u otros datos propios | Copilot 4 con conexión de Atelier autorizada y vigente | Consultar solo los campos realmente expuestos por el puente Owner Live; una skill o CLI pública no concede este acceso. Si falla la conexión, pedir reconectar y no inventar datos. |

El [repositorio público](https://github.com/tokenizartinfo-ops/tokenizart-agentic) ofrece código, contratos, OKF y documentación. El [índice de skills](../skills/README.md) lleva a cada archivo concreto; las fuentes dentro de cada skill respaldan sus instrucciones. La [tienda pública](https://tokenizart.com/es/shop/) muestra vías de adquisición de vouchers; el saldo personal se comprueba en la sesión autenticada.

## Cómo responder y acompañar

1. Identificar la intención, incluso si el usuario dice «¿qué tengo?», «fijate en esto» o «quiero certificar». Si hay dos interpretaciones plausibles, hacer una pregunta breve y específica.
2. Seleccionar una skill y citar la fuente pública pertinente. Distinguir un hecho documentado de un dato que deba leerse ahora de la cuenta.
3. Para información personal, obtenerla únicamente a través de Copilot y la conexión autorizada; informar si falta, está vencida o no ofrece ese dato.
4. Explicar el siguiente paso en Atelier y comprobar el resultado real antes de declarar una acción completada. Una pantalla de error no prueba que una transacción falló.

## Contrato de evolución hacia acciones

| Capa | Estado en esta distribución | Evolución requerida |
| --- | --- | --- |
| `knowledge.*`, `gallery.*`, `demo.*` | Lectura pública mediante CLI/MCP piloto, según endpoint y configuración | Validar despliegue y accesibilidad por entorno. |
| `atelier.read.*` | Fuera de la CLI pública; solo datos de owner expuestos por conexión autorizada en Copilot | Contratos por recurso, identidad y consentimiento revocable comprobados por el servidor en cada lectura. |
| `atelier.prepare.*` | Futuro; las skills solo orientan | Operaciones de preparación en borrador, con previsualización, alcance explícito, idempotencia y autorización por usuario. |
| `atelier.execute.*` | Futuro, sin comandos en esta distribución | Contratos y permisos específicos, confirmación humana, auditoría, verificación de resultado y controles de reversión cuando corresponda. |
| Firma de Mint, Certify o transferencia | Siempre fuera del agente | El usuario confirma y firma en Atelier con su propia wallet. El agente jamás solicita ni recibe clave privada, frase de recuperación o contraseña de firma. |

Estas fronteras están definidas en el [contrato de distribución pública](../contracts/agentic-public-distribution.v1.json) y el [contrato CLI](../contracts/tokenizart-cli.v1.json). Un futuro MCP con herramientas de Atelier debe cumplirlas antes de ofrecer una acción: una llamada de la LLM no equivale al consentimiento ni a la firma del usuario.

El [roadmap de ejecución gradual](ATELIER-AGENT-ACTIONS-ROADMAP.es.md) convierte esta evolución en bloques de entrega medibles: primero lectura de cuenta, después preparación y finalmente acciones supervisadas, ampliando skills, MCP y CLI con el mismo contrato por tarea.

## Ruta de descubrimiento

Para humanos: [Tokenizart](https://tokenizart.com/), [recursos públicos de Atelier](https://atelier.tokenizart.com/recursos.html), [guía](https://tokenizart.com/es/tokenizart-y-atelier-guia-publica-y-descubrimiento-agentico/), [capacidades](https://tokenizart.com/es/atelier-capacidades/) y [Demo Atelier](https://github.com/tokenizartinfo-ops/tokenizart-atelier-demo). Para agentes: [README](../README.md) → [índice de skills](../skills/README.md) → skill específica → fuentes verificadas; y, si se necesita una herramienta de lectura, [CLI](../contracts/tokenizart-cli.v1.json) o [MCP preview](../mcp/server.preview.json) con sus restricciones de entorno.
