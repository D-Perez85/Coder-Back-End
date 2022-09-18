const { PersonasApi } = require('./models');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const personasApi = new PersonasApi();

app.set('views', './views');
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Rutas
app.get('/', (req, res) => {
  res.render('pages/home');
});
app.get('/personas', (req, res) => {
  res.render('pages/index', {
    personas: personasApi.listarTodos()
  })
});
app.post('/personas', (req, res) => {
  personasApi.guardar(req.body);
  res.redirect('/personas');
});

const connectedServer = app.listen(PORT, () => console.log(`Servidor activo y escuchando en el puerto ${PORT}`));
connectedServer.on('error', (error) => console.log(error.message));