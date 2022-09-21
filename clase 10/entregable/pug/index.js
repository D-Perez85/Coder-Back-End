const Router = require('./routes/router');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'pug');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Router);

const connectedServer = app.listen(PORT, () => console.log(`Servidor activo y escuchando en el puerto ${PORT}`));
connectedServer.on('error', (error) => console.log(error.message));