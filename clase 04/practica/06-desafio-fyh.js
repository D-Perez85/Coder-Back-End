/**  Desafio generico - Guardar en un archivo fyh.txt la hora actual y leerlo usand operaciones sync  */

const fs = require('fs');

function escribir(ruta, data) {
    try {
        fs.writeFileSync(ruta, data);
        console.log(`Datos guardados : ${data}`);
    } catch (error) {
        console.log('Hubo un error');
        console.log(error.message);
    }
}
function leer(ruta) {
    try {
        let data = fs.readFileSync(ruta, 'utf-8');
        console.log(`Datos obtenidos : ${data}`);
    } catch (error) {
        console.log('Hubo un error');
        console.log(error.message);
    }
}
const now = new Date().toLocaleTimeString();
let ruta = './desafios/01.txt'

// ejecucion
escribir(ruta, now); 
leer(ruta)

