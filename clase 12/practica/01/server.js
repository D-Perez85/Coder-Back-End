const express = require('express'); 
const {Server: HttpServer} = require('http'); 
const {Server: SocketServer} = require('socket.io');
const PORT = process.env.PORT || 8080;
const app = express(); 
const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);

const messages = [
    { author: "Juan", text: "¡Hola! ¿Que tal?" },
    { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
    { author: "Ana", text: "¡Genial!" }
 ];

// Middlewares
app.use(express.static("./public")); 

// Listen
httpServer.listen(PORT, ()=>{
    console.log(" Server is running at port ", PORT);
})

// Socket Events
io.on('connection', (socket) => {
    console.log("New Client conected!");
    console.log(socket.id);
    socket.emit('messages', [...messages]);
});

