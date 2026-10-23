# Activación de servicios con Kafka

POC del TP8 de Sistemas Distribuidos. Desarrollo incremental con cinco servicios
NestJS, una UI React y contratos de eventos compartidos.

## Estado actual: bloque 1

- Monorepo con pnpm workspaces y TypeScript estricto.
- Cinco aplicaciones NestJS con `GET /health`.
- UI React + Vite con una pantalla inicial.
- Librería `@activation/contracts`, importada por backend y frontend.
- Todavía no hay conexiones a Kafka o MongoDB ni contratación de planes.

## Requisitos

- Node.js 24 LTS, versión 24.15 o superior dentro de la rama 24.
- pnpm 11.25.0 (fijado en `packageManager`).
- Docker se incorpora en el bloque 2.

## Instalación y ejecución

Desde la raíz del proyecto:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm dev` compila primero los contratos y luego inicia las seis aplicaciones en
paralelo con recarga durante el desarrollo. Se detienen con `Ctrl+C`.

| Aplicación | URL local |
| --- | --- |
| Demo UI | http://127.0.0.1:5173 |
| Activation API | http://127.0.0.1:3000/health |
| Billing | http://127.0.0.1:3001/health |
| Provisioning | http://127.0.0.1:3002/health |
| Notification | http://127.0.0.1:3003/health |
| CRM analytics | http://127.0.0.1:3004/health |

Los endpoints de salud verifican que el proceso responde. No verifican dependencias
externas. Los puertos de los consumidores son de diagnóstico local; no son APIs de
negocio ni se usan para comunicarse entre servicios.

Para trabajar solo sobre una aplicación:

```sh
pnpm dev:api
pnpm dev:ui
```

Para ejecutar otro servicio individualmente:

```sh
pnpm build:contracts
pnpm --filter @activation/billing-service dev
```

Los servicios aceptan `PORT` y `HOST` como variables de entorno. Por defecto se
limitan a `127.0.0.1`; Docker usará `HOST=0.0.0.0` en el siguiente bloque.

Si modificás `libs/contracts/src/index.ts`, reiniciá `pnpm dev` para recompilar la
librería. La UI y las aplicaciones observan sus propios archivos durante el desarrollo.

## Verificación

```sh
pnpm typecheck
pnpm build
```

La compilación respeta las dependencias entre paquetes: primero `contracts`, después
las aplicaciones. Cada backend genera `dist/main.js`; la UI genera `dist/` con sus
archivos estáticos.

Con `pnpm dev` ejecutándose, en otra terminal PowerShell:

```powershell
Invoke-RestMethod http://127.0.0.1:3000/health
```

La respuesta esperada es `{ "service": "activation-api", "status": "ok" }`.

## Organización

```text
apps/
  activation-api/
  billing-service/
  provisioning-service/
  notification-service/
  crm-analytics-service/
  demo-ui/
libs/
  contracts/
  kafka-toolkit/       # Por ahora contiene solo una nota de alcance
docs/
  architecture.md
  learning-path.md
```

Para entender este bloque, seguí el recorrido de [learning-path.md](docs/learning-path.md).
La arquitectura y los siguientes pasos están en [architecture.md](docs/architecture.md).
