const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const Personas = require('./model/Personas');

const PORT = 8080;

const app = express();
const personas = new Personas();

app.engine('hbs', engine({                      
  extname: 'hbs',                
  defaultLayout: 'main.hbs',     
  layoutsDir: path.resolve(__dirname, './views/layouts'),   
  partialsDir: path.resolve(__dirname, './views/partials')  
}));

app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', { mostrarPersonas: true, personas: personas.getAll(), admin: true });
});
app.listen(PORT, ()=>console.log("Ready on port => ", PORT));