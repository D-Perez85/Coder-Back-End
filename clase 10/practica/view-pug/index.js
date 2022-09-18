const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('views', './views'); //Metodo para setear la ubicacion de plantillas
app.set('view engine', 'pug'); //Metodo para setear el motor de plantilla

// Rutas
/** -- 01: ruta estatica   */
app.get('/', (req, res) => {
  res.render('estatica');
})
/** -- 02: ruta dinamica   */
app.get('/datos', (req, res) => {
  const saludo = "Hola desde el server";
  const arreglo = [1, 2, 3]
  res.render('dinamica', { saludo, arreglo, showList: true});
})
/** -- 03: ruta referenciada (bloque)   */
app.get('/referencia', (req, res) => {
  res.render('main');
})

const connectedServer = app.listen(PORT, () => console.log(`Servidor activo y escuchando en el puerto ${PORT}`));
connectedServer.on('error', (error) => console.log(error.message));