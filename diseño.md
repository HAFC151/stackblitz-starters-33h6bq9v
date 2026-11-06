# Diseño del Sistema — Gestor de Tareas

## 1. Modelo de Datos

### Entidad: Tarea

- **id**: Número (autogenerado, obligatorio)
- **titulo**: Texto (obligatorio)
- **descripcion**: Texto (opcional)
- **responsable**: Texto (obligatorio)
- **estado**: Texto ("pendiente" | "en progreso" | "hecha", obligatorio)
- **fechaLimite**: Texto / Fecha (opcional)

---

## 2. Rutas de la API (Endpoints)

| Método | Ruta          | Descripción / Qué hace                                                    |
| ------ | ------------- | ------------------------------------------------------------------------- |
| GET    | `/tareas`     | Lista todas las tareas (permite filtrar por `?estado=` o `?responsable=`) |
| GET    | `/tareas/:id` | Consulta una tarea específica por su ID                                   |
| POST   | `/tareas`     | Crea una nueva tarea                                                      |
| PUT    | `/tareas/:id` | Edita una tarea existente o actualiza su estado                           |
| DELETE | `/tareas/:id` | Elimina una tarea por su ID                                               |

---

## 3. Estructura de Carpetas del Proyecto

```text
/
├── src/
│   ├── routes/        -> Define las rutas (/tareas) y qué función las atiende
│   ├── controllers/   -> La lógica de cada acción (crear, listar, editar...)
│   └── data/          -> Donde se guarda la información (arreglo en memoria)
├── index.js           -> Arranca el servidor Express
├── package.json
├── requisitos.md
├── planeacion.md
└── diseño.md
```
