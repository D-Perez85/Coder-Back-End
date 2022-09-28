const socket = io();
const chat = document.getElementById("chat");

socket.on('messages', (data) => {
    console.log(data);
    const html = data.map((item) => {
        return `<span> 
            <strong> ${item.author} : </strong> ${item.text}
        </span><br>`
    }).join("\n");
    chat.innerHTML = html;
});