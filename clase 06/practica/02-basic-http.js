const http = require('http'); 
const PORT = 8000; 

const server = http.createServer((req, res) => {
    console.log("realizo peticion");
    console.log(req.url, req.method);
    if(req.url === '/' && req.method === 'GET'){
        res.end('Soy el inicio');
    }else if(req.url === '/login'){
        res.end('Soy el login');
    }else{
        res.write('Hellow World')
        res.end('Chau')
    }
});

server.listen(PORT, function () {
    console.log(`servidor esta escuchando en puerto ${PORT}`);
});

