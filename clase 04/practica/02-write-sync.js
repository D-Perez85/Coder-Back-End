const fs = require('fs');

/** Escribir un archivo sincrónico con manejo de errores  */

try {
    fs.writeFileSync('./files_sync/archivo.txt', 'El contenido se escribio en el archivo');
    console.log('Archivo creado correctamente');
} catch (error) {
    console.log('Hubo un error');
    console.log(error.message);
}


