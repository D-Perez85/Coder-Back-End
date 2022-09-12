const express = require('express');

const app = express();
const PORT = 8080;
const frase = 'Hola mundo cómo están';

app.get('/api/frase', (req, res) => {
    res.json({ frase });
})

app.get('/api/letras/:num', (req, res) => {
    const { num } = req.params;
    if (isNaN(+(num))) return res.status(400).json({ error: "El parámetro debe ser un número "});
    if (+(num) < 1 || +(num) > frase.length) return res.status(400).json({ error: "El parámetro está fuera de rango"});
    res.json({ letra: frase[+(num) - 1]})
  });
  
app.get('/api/palabras/:num', (req, res) => {
    const { num } = req.params;
    if (isNaN(+(num))) return res.status(400).json({ error: "El parámetro debe ser un número "});
    const palabras = frase.split(" "); // ["Hola", "mundo", "cómo", "están?"]
    if (+(num) < 1 || +(num) > palabras.length) return res.status(400).json({ error: "El parámetro está fuera de rango"});
    res.json({ palabra: palabras[+(num) - 1]});
  });

const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));




