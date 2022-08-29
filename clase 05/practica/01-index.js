// __dirname: direccion actual
console.log(__dirname);
// __filename: nombre del archivo
console.log(__filename);
// require: funcion para importar modulos en Node
const fs = require('fs'); 
// module: te da mas info acerca del modulo actual
console.log(module);

console.log(process.arch);
console.log(process.platform);

const P1 = 'JORGE'; 
const P2 = 'CAMILO';
const saludar = (nombre) => console.log(`Hola ${nombre}`); 

module.exports = { P1, P2, saludar }
console.log(module);
