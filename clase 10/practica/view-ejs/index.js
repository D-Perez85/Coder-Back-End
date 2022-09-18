const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('views', './views'); //Metodo para setear la ubicacion de plantillas
app.set('view engine', 'ejs'); //Metodo para setear el motor de plantilla

/**     <%=  %> EXPRESION JS (=PUG)
        <%-  %> FORMATO HTML (partials)
        <%   %> CODIGO JS (if / for / const / fn() */

// Index Page
app.get('/', (req, res)=>{
  const arreglo = [1,2,3]
  const personas = [
    {name: "Juan", apellido: "Perez"},
    {name: "Pablo", apellido: "Lopez"},
    {name: "Jorge", apellido: "Zeballos"},
    {name: "Maximo", apellido: "Paz"}
  ];
  const tagline = "Ejemplo practico con EJS.";
  res.render('pages/index', {showSaludo: true, saludo: "Hola desde el servidor", arreglo, personas, tagline}); 
})
// About Page
app.get('/about', (req, res)=>{
  res.render('pages/about'); 
})
const connectedServer = app.listen(PORT, () => console.log(`Servidor activo y escuchando en el puerto ${PORT}`));
connectedServer.on('error', (error) => console.log(error.message));

