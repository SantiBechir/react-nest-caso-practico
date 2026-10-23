# Arquitectura

## Organización del monorepo

Usamos pnpm workspaces. Cada carpeta de `apps/` tiene su propio `package.json` y
es una aplicación independiente. `libs/contracts` es un paquete compartido.

`workspace:*` en una dependencia exige que pnpm la resuelva dentro del repositorio.
No descarga un paquete del mismo nombre desde npm. Esto también permite que pnpm
compile los contratos antes de compilar sus consumidores.

Los contratos se publican localmente en dos formatos: CommonJS para las aplicaciones
NestJS y ESM para Vite. Ambos se generan a partir del mismo archivo TypeScript.

Cada backend tiene su propio módulo y controller de salud. No compartimos módulos de
negocio ni accedemos a datos de otro servicio. Compartimos la forma de los mensajes.

## Responsabilidades previstas

| Servicio | Responsabilidad |
| --- | --- |
| activation-api | REST, WebSocket y agregación de resultados de la saga |
| billing-service | Creación y cancelación de la cuenta simulada |
| provisioning-service | Aprovisionamiento simulado |
| notification-service | Correo de bienvenida o error mediante Mailhog |
| crm-analytics-service | Registro y replay de eventos |

La UI se comunicará por HTTP y WebSocket con activation-api. Los servicios se
comunicarán mediante Kafka. MongoDB tendrá una base por servicio.

## Implementado en el bloque 1

Los endpoints `/health` y la pantalla inicial permiten comprobar los arranques.
No hay productores, consumidores, bases de datos ni simulaciones de negocio todavía.

Los contratos iniciales incluyen nombres de servicios, los cuatro topics, estados de
activación, modos de fallo y el sobre versionado de `ActivationRequested`.
Los contratos TypeScript describen la forma de los datos; no validan mensajes en tiempo
de ejecución. Incorporaremos validación cuando existan solicitudes y consumidores.

## Siguiente bloque

Agregar Docker Compose, Kafka en KRaft, Kafka UI, MongoDB en replica set y creación
automática de topics. Los servicios y la UI se incorporarán al entorno local.
