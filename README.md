# 🚀 Dashboard de Gestión de Tareas

**Caso de Uso Asignado:** Caso de Uso 1 (Gestión de Tareas y Pendientes)

## 👤 Autor
- **Harold Andrés Fernández Cárdenas**

---

## 📝 Descripción Breve
Aplicación web full-stack desarrollada bajo una **arquitectura de 3 capas** (Data, Controllers y Routes). Permite crear, listar, actualizar el estado y eliminar tareas en tiempo real a través de un Dashboard visual responsivo en modo oscuro que consume una API REST desarrollada en Node.js y Express.

---

## 🌐 Enlaces del Proyecto
* **URL Pública en Render:** [https://gestor-tareas-harold.onrender.com](https://gestor-tareas-harold.onrender.com)
* **Repositorio en GitHub:** [https://github.com/HAFC151/stackblitz-starters-33h6bq9v](https://github.com/HAFC151/stackblitz-starters-33h6bq9v)

---

## 🔌 Lista de Endpoints Disponibles

| Método | Ruta | Descripción | Estado HTTP |
| :--- | :--- | :--- | :--- |
| `GET` | `/tareas` | Obtiene el listado completo de tareas | `200 OK` |
| `GET` | `/tareas/:id` | Obtiene una tarea específica por su ID | `200 OK` / `404 Not Found` |
| `POST` | `/tareas` | Crea una nueva tarea (`titulo`, `descripcion`, `responsable`) | `201 Created` / `400 Bad Request` |
| `PUT` | `/tareas/:id` | Actualiza los datos o el estado de una tarea | `200 OK` / `404 Not Found` |
| `DELETE` | `/tareas/:id` | Elimina una tarea según su ID | `200 OK` / `404 Not Found` |

---

## 🧪 Cómo probar cada Endpoint (Ejemplos cURL)

Puedes ejecutar estos comandos desde la terminal para probar la API directamente:

### 1. Obtener todas las tareas (`GET`)
```bash
curl -X GET [https://gestor-tareas-harold.onrender.com/tareas](https://gestor-tareas-harold.onrender.com/tareas)
