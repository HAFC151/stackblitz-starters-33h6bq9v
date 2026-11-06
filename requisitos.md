# Proyecto Integrador - Caso 1: Gestor de Tareas

## Actores
- Usuario del sistema

## Requisitos Funcionales
- RF1. El sistema debe permitir crear, listar, consultar, editar y eliminar tareas (CRUD completo).
- RF2. El sistema debe permitir asignar una tarea a un responsable.
- RF3. El sistema debe permitir actualizar el estado de una tarea (`pendiente`, `en progreso`, `hecha`).
- RF4. El sistema debe permitir filtrar la lista de tareas por estado o por responsable mediante parámetros (`?estado=` o `?responsable=`).

## Requisitos No Funcionales
- RNF1. La API debe responder en formato JSON.
- RNF2. Los campos obligatorios (`titulo` y `responsable`) deben validarse antes de guardar.
- RNF3. La API debe responder con códigos de estado HTTP estandarizados (200, 201, 204, 400, 404).