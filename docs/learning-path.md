# Recorrido para aprender mientras construimos

## Bloque 1: estructura

Recorré estos archivos en orden:

1. `pnpm-workspace.yaml`: indica qué carpetas son paquetes del monorepo.
2. `package.json` de la raíz: coordina instalación, ejecución y compilación.
3. `apps/activation-api/package.json`: declara dependencias y comandos de una app.
4. `apps/activation-api/src/main.ts`: crea la aplicación NestJS y abre el puerto HTTP.
5. `apps/activation-api/src/app.module.ts`: registra el controller en NestJS.
6. `apps/activation-api/src/health.controller.ts`: `@Controller` y `@Get` definen la ruta.
7. `libs/contracts/src/index.ts`: define tipos y constantes comunes.
8. `apps/demo-ui/src/main.tsx`: monta React en el HTML.
9. `apps/demo-ui/src/App.tsx`: importa un contrato compartido y renderiza la pantalla.

### Ejercicio de comprobación

Con `pnpm dev` ejecutándose, consultá `http://127.0.0.1:3000/health` desde una segunda
terminal o el navegador. Después cambiá un texto de `App.tsx` y observá la recarga.

Preguntas que podemos trabajar: ¿qué hace un módulo?, ¿para qué sirve un decorator?,
¿qué diferencia hay entre un tipo y un valor?, ¿por qué cada servicio es un proceso distinto?

## Próximos bloques

| Bloque | Resultado |
| --- | --- |
| 2 | Infraestructura local con Docker, Kafka y MongoDB |
| 3 | Crear una activación y publicar el primer evento |
| 4 | Billing y provisioning procesan en paralelo |
| 5 | La API reúne resultados y completa la activación |
| 6 | Fallos y compensación |
| 7 | UI, timeline WebSocket y correos: demo mínima |
| 8 | Idempotencia, offsets, reintentos y DLQ |
| 9 | CRM, loyalty, cinco escenarios y documentación de demo |

Outbox transaccional, Schema Registry y OpenTelemetry quedan para la fase opcional.
