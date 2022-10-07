import express from "express";
import { getTime } from "./lib/utils";
import Persona from "./Persona";

const p: Persona = new Persona("Coder", "House");

const app = express();

app.get("/", (req, res) => {
 res.send({
   time: getTime(),
   name: p.getFullName(),
 });
}); // Explicar porque es importante @types/express

app.use('*', (req, res) => {
  res.status(404).send('NOT FOUND');
})

const PORT = 8080;
app.listen(PORT, () => {
 console.log(`conectado al puerto: ${PORT}`);
});


