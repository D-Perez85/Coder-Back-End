const fs = require('fs');

/** Borrar un archivo usando callback y manejo de errores  */
fs.unlink('./files_cb/archivo.txt', (error) => {
    if (error) {
        console.log('error:', error)
    } else {
        console.log('archivo borrado!');
    }
});
