const fs = require('fs');

/** Escribir un archivo usando callback y manejo de errores  */
let contenido =' Texto en el archivo'; 
fs.writeFile('./files_cb/archivo1.txt', contenido, (error) => {
    if (error) {
        console.log('error:', error)
    } else {
        console.log('Archivo creado exitosamente');
    }
});
