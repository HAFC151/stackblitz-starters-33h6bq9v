let tareas = [];
let siguienteId = 1;

function obtenerTodas() {
  return tareas;
}

function obtenerUna(id) {
  return tareas.find((t) => t.id === id);
}

function crear(datos) {
  const nuevaTarea = { id: siguienteId++, ...datos };
  tareas.push(nuevaTarea);
  return nuevaTarea;
}

function actualizar(id, datos) {
  const tarea = obtenerUna(id);
  if (!tarea) return null;
  Object.assign(tarea, datos);
  return tarea;
}

function eliminar(id) {
  const tarea = tareas.findIndex((t) => t.id === id);
  if (tarea === -1) return false;
  tareas.splice(tarea, 1);
  return true;
}

module.exports = { obtenerTodas, obtenerUna, crear, actualizar, eliminar };
