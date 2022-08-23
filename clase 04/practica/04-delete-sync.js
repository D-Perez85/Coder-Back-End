const fs = require('fs');


/** Borrar un archivo sincrónico con manejo de errores */
try {
    fs.unlinkSync('./files_sync/archivo1.txt');
    console.log('Archivo borrado correctamente');
} catch (error) {
    console.log('Hubo un error');
    console.log(error.message);
}
