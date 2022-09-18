const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
  res.render('pages/home');
})
app.get('/datos', (req, res) => {
  res.render('pages/main', req.query);
})

const connectedServer = app.listen(PORT, () => console.log(`Servidor activo y escuchando en el puerto ${PORT}`));
connectedServer.on('error', (error) => console.log(error.message));