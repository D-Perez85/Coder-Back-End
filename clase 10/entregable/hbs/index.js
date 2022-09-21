const Router = require('./routes/router');
const express = require('express');
const app = express();

const { engine } = require('express-handlebars'); 
const path = require('path');

const PORT = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Router);

app.engine('hbs', engine({                      
    extname: 'hbs',                
    defaultLayout: 'main.hbs',     
    layoutsDir: path.resolve(__dirname, './views/layouts'),   
    partialsDir: path.resolve(__dirname, './views/partials')  
  }));

const connectedServer = app.listen(PORT, () => console.log(`Servidor activo y escuchando en el puerto ${PORT}`));
connectedServer.on('error', (error) => console.log(error.message));