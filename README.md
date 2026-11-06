# 🚀 Dashboard de Gestión de Tareas

**Caso de Uso Asignado:** Caso de Uso 1 (Gestión de Tareas y Pendientes)

## 👤 Autor
- **Harold Andrés Fernández Cárdenas**

---

## 📝 Descripción Breve
Aplicación web full-stack desarrollada bajo una **arquitectura de 3 capas** (Data, Controllers y Routes). Permite crear, listar, actualizar el estado y eliminar tareas en tiempo real a través de un Dashboard visual responsivo en modo oscuro que consume una API REST desarrollada en Node.js y Express.

---

## 🌐 Enlaces del Proyecto
* **URL Pública en Render:** [https://tu-app-en-render.onrender.com](https://tu-app-en-render.onrender.com)[cite: 16]
* **Repositorio en GitHub:** [https://github.com/tu-usuario/tu-repositorio](https://github.com/tu-usuario/tu-repositorio)[cite: 16]

---

## 🔌 Lista de Endpoints Disponibles

| Método | Ruta | Descripción | Estado HTTP |
| :--- | :--- | :--- | :--- |
| `GET` | `/tareas` | Obtiene el listado completo de tareas[cite: 6] | `200 OK` |
| `GET` | `/tareas/:id` | Obtiene una tarea específica por su ID[cite: 4, 6] | `200 OK` / `404 Not Found`[cite: 4] |
| `POST` | `/tareas` | Crea una nueva tarea (`titulo`, `descripcion`, `responsable`)[cite: 4, 6] | `201 Created` / `400 Bad Request`[cite: 4] |
| `PUT` | `/tareas/:id` | Actualiza los datos o el estado de una tarea[cite: 4, 6] | `200 OK` / `404 Not Found`[cite: 4] |
| `DELETE` | `/tareas/:id` | Elimina una tarea según su ID[cite: 4, 6] | `200 OK` / `404 Not Found`[cite: 4] |

---

## 🧪 Cómo probar cada Endpoint (Ejemplos cURL)

Puedes ejecutar estos comandos desde la terminal para probar la API directamente:

### 1. Obtener todas las tareas (`GET`)
```bash
curl -X GET [https://tu-app-en-render.onrender.com/tareas](https://tu-app-en-render.onrender.com/tareas)