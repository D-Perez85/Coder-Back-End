const socket = io();

const input = document.querySelector("#chat-input"); 
input.addEventListener('input', () => {
    socket.emit("message", input.value)
})

/** Ejemplo 01 */
// socket.on('server-message', (data) => {
//     console.log("Recibi un mensaje desde el server");
//     alert(data);
// })

/** Ejemplo 02 */
socket.on('server-message', (data) => {
    document.querySelector('#chat-box-message').innerHTML = data; 
})