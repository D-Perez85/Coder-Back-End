import express from "express";
import text from "./file.txt";

const PORT = process.env.port || 8080;
const app = express();

app.get('/', (req, res)=> res.send(text));

app.listen(PORT, ()=> console.log('Ready on port => ', PORT)); 
