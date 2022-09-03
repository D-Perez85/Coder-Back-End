const express = require('express'); 
require('dotenv').config()
const PORT = process.env.PORT || 8000; 

const app = express(); 

const server = app.listen(PORT, ()=> console.log(PORT)); 
server.on('error', (error)=> console.log(error.message)); 


