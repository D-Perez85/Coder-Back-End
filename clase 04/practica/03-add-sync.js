const fs = require('fs');

/** Editar un archivo sincrónico con texto nuevo */
try {
    fs.appendFileSync('./files_sync/archivo.txt', '\nContenido agregado en el archivo con append');
    console.log('Archivo editado correctamente');
} catch (error) {
    console.log('Hubo un error');
    console.log(error.message);
}
