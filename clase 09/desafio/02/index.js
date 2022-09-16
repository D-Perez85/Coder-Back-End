const express = require('express');
const fs = require('fs/promises');
const PORT = 8080;

const app = express();
app.engine('cte', async (path, options, callback) => {/** seteo la extension ej: cte */
  try {
    const content = await fs.readFile(path, 'utf-8'); /** aca va el path de lo que quiero leer */
    const html = content
      .replace('^^titulo$$', `${options.titulo}`)
      .replace('^^mensaje$$', `${options.mensaje}`)
      .replace('^^autor$$', `${options.autor}`)
      .replace('^^version$$', `${options.version}`)
    return callback(null, html);
  }
  catch(error) {
    return callback(error);
  }
});

app.set('views', './views');/** especifica el directorio de vistas */
app.set('view engine', 'cte'); /** registra el motor de plantillas */

/** render de la vista cte1 */
app.get('/cte1', (req, res) => {
  res.render('template', { 
    titulo: "Clase de plantillas - render 01",
    mensaje: "Estamos aprendiendo a utilizar plantillas - render 01",
    autor: "Damian Perez - render 01",
    version: "1.0.0"
   })
});

/** render de la vista cte2 */
app.get('/cte2', (req, res) => {
  res.render('template2', { 
    nombre: "Clase de plantillas - render 02",
    apellido: "Estamos aprendiendo a utilizar plantillas - render 02",
    fecha: "12-09-22",
    hora: "20;24"
     })
});

app.listen(PORT, ()=>console.log("Ready on port => ", PORT));