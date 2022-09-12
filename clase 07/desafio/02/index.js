const express = require('express');

const app = express();
const PORT = 8080;

app.get('/api/sumar/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    res.json({ resultado: +(num1) + +(num2)});
});

app.get('/api/sumar', (req, res) => {
    const { num1, num2 } = req.query;
    res.json({ resultado: +(num1) + +(num2)});
});

app.get('/api/operacion/:op', (req, res) => {
    const { op } = req.params;
    res.json({ resultado: eval(op)});
  });

app.post('/api', (req, res) => res.send('ok => '+ req.method));
app.put('/api', (req, res) => res.send('ok => '+ req.method));
app.delete('/api', (req, res) => res.send('ok => '+ req.method));

const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));