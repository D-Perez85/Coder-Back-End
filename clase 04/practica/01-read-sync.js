const fs = require('fs');

/** Crear un directorio sincrónico*/ 
fs.mkdirSync('./files_sync'); 


/** Leer un archivo sincrónico con manejo de errores  */
try {
    let data = fs.readFileSync('./files_sync/archivo.txt', 'utf-8');
    console.log(data);
} catch (error) {
    console.log('Hubo un error');
    console.log(error.message);
}

