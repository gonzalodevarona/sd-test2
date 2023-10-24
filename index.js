const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el número de puerto si es necesario

// Endpoint de inicio
app.get('/', (req, res) => {
  res.send('¡Hola, mundo desde Express!');
});

// Endpoint de ejemplo
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}!`);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
