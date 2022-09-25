const express = require('express'); 
const {Server: HttpServer} = require('http'); 
const {Server: SocketServer} = require('socket.io'); 

const PORT = process.env.PORT || 8080; 
const app = express(); 

app.use(express.static("./public"));

const httpServer = new HttpServer(app);
httpServer.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))

const io = new SocketServer(httpServer); 

// on (escuchar)  -  emit (emitir)
io.on('connection', (socket) => {
console.log("Nuevo Cliente conectado");

// socket.emit("server-message", "Este es un mensaje desde el servidor!") one
socket.on('message', (data) => { 
    io.emit('server-message', data)
    })
}); 


