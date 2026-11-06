const express = require('express');
const path = require('path');
const app = express();
const tareasRoutes = require('./src/routes/tareas');

app.use(express.json());

// Servir la carpeta de archivos estáticos (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz explícita que entrega el HTML de la interfaz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/tareas', tareasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
