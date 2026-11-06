const datos = require('../data/tarea');

function listar(req, res) {
  let resultado = datos.obtenerTodas();
  const { estado, responsable } = req.query;

  if (estado) {
    resultado = resultado.filter(
      (t) => t.estado && t.estado.toLowerCase() === estado.toLowerCase()
    );
  }

  if (responsable) {
    resultado = resultado.filter(
      (t) =>
        t.responsable &&
        t.responsable.toLowerCase() === responsable.toLowerCase()
    );
  }

  res.json(resultado);
}

function obtener(req, res) {
  const id = Number(req.params.id);
  const tarea = datos.obtenerUna(id);
  if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(tarea);
}

function crear(req, res) {
  const { titulo, responsable } = req.body;
  if (!titulo || !responsable) {
    return res
      .status(400)
      .json({ error: 'Título y responsable son obligatorios' });
  }
  const nueva = datos.crear({
    titulo,
    descripcion: req.body.descripcion || '',
    responsable,
    estado: 'pendiente',
  });
  res.status(201).json(nueva);
}

function actualizar(req, res) {
  const id = Number(req.params.id);
  const actualizada = datos.actualizar(id, req.body);
  if (!actualizada)
    return res.status(404).json({ error: 'Tarea no encontrada' });
  res.json(actualizada);
}

function eliminar(req, res) {
  const id = Number(req.params.id);
  const exito = datos.eliminar(id);
  if (!exito) return res.status(404).json({ error: 'Tarea no encontrada' });
  res.status(204).send();
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
