# Modalidades comerciales para integradores

Tokenizart separa la interoperabilidad abierta de la ejecucion comercial
alojada. Personas y agentes pueden descubrir contratos publicos, conocimiento
verificado y trazabilidad de lectura sin recibir derechos para operar Atelier,
vouchers, wallets, vinculacion NFC o datos owner.

> Interoperabilidad abierta. Conocimiento atribuible. Ejecucion propietaria.
> Marca protegida.

La fuente legible por maquinas de esta guia es
[`tokenizart-commercial-integration-policy.v1.json`](../contracts/tokenizart-commercial-integration-policy.v1.json).

## Elegir la modalidad adecuada

| Modalidad | Cuando corresponde | Activacion | Tratamiento de marca |
| --- | --- | --- | --- |
| Lectura publica | Necesitas conocimiento publico, trazabilidad publica de Gallery, contratos, skills o Demo Atelier | Terminos de las licencias publicas | Referencia nominativa exacta |
| Integracion atribuida | Tu sitio, aplicacion o agente muestra resultados publicos respaldados por Tokenizart o consume cuotas publicas contratadas | Acuerdo comercial firmado | Atribucion visible a Tokenizart |
| Marca blanca gestionada | Necesitas frontend, dominio o flujo personalizado respaldado por servicios operados por Tokenizart | Acuerdo comercial firmado | Anexo escrito de marca y atribucion |
| OEM empresarial | Necesitas escala institucional, gobernanza, soporte, cuotas o un modelo de despliegue acordado expresamente | Acuerdo comercial firmado | Licencia OEM y anexo de marca |

Si la modalidad no esta clara, se aplica **lectura publica**. El codigo abierto
y la documentacion abierta nunca implican derechos de ejecucion alojada, datos
owner, marca blanca o uso de marcas.

## Vouchers, gas y cuotas de servicio

Son capas diferentes:

- Un **voucher** es un derecho comercial de Tokenizart para una accion elegible.
- El **gas** es un costo de infraestructura blockchain. Tokenizart puede
  abstraerlo o subvencionarlo conforme a la politica de plataforma y al acuerdo
  aplicable.
- Una **cuota API o MCP** limita consumo de servicio. No reemplaza un voucher
  especifico ni autoriza por si sola la ejecucion de una accion.

Las opciones publicas estandar pueden encontrarse en el
[Shop de Tokenizart](https://tokenizart.com/es/shop/). Los proyectos de marca
blanca y OEM se cotizan segun alcance autorizado, volumen, infraestructura,
soporte, seguridad y derechos de marca. Este repositorio no constituye una
oferta de precio permanente.

## Que opera Tokenizart

Salvo que un acuerdo escrito indique expresamente otra cosa, Tokenizart opera
el backend propietario, los controles de owner y consentimiento, el ledger de
vouchers, la politica de abstraccion y subvencion de transacciones, la
integracion con el smart contract y los servicios NFC configurados.

Un integrador puede construir su propia capa visual y publicar resultados
publicos autorizados. Sigue siendo responsable de ese frontend, su contenido,
sus afirmaciones, seguridad y cumplimiento. El cliente o institucion conserva
la responsabilidad por instrucciones licitas, derechos sobre contenidos y
permisos owner necesarios.

Ninguna parte debe afirmar autenticidad, titularidad, conclusiones
profesionales o provenance mas alla de la evidencia verificada y expuesta para
ese alcance.

## Paquete contractual necesario

Todo proyecto de marca blanca gestionada u OEM empresarial debe definir por
escrito:

1. servicios y alcance autorizado;
2. marca y atribucion;
3. uso, vouchers y facturacion;
4. datos, privacidad y permisos owner;
5. seguridad, incidentes y auditoria;
6. soporte, niveles de servicio y mantenimiento;
7. plazo, suspension, salida y portabilidad.

Contacto comercial: `tokenizart.info@gmail.com`.

## Limite publico de seguridad

Esta distribucion publica no concede ejecucion de Mint, Certify, transferencia,
mutaciones de vouchers o privacidad, vinculacion NFC, uploads, firma de wallet,
contexto owner ni administracion de Gestion. Esas capacidades requieren
controles separados de identidad, consentimiento, scope, entitlement,
auditoria y release.
