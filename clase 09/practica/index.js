const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const Products = require('./model/Products');

const PORT = 8080;

const app = express();
const products = new Products();

app.engine(
  'hbs',                        // Nombre referencia a la plantilla 
  engine({                      // Fn de configuracion hbs
  extname: 'hbs',               // Extension a utilizar (en lugar )
  defaultLayout: 'main.hbs',    // Plantilla ppal 
  layoutsDir: path.resolve(__dirname, './views/layouts'),  // Ruta a la plantilla ppal
  partialsDir: path.resolve(__dirname, './views/partials') // Ruta a las plantillas parciales
}));

app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  //los seteos en booleans pueden variar para mostar / ocultar info y administar permisos
  res.render('index', { mostrarProductos: true, products: products.getAll(), admin: true });
});

app.listen(PORT, ()=>console.log("Ready on port => ", PORT));