const fs = require('fs');
/** Agregar data a un archivo usando callback y manejo de errores  */
fs.appendFile('./files_cb/archivo1.txt', '\nTexto a agregar', (error) => {
    if (error) {
        console.log('error:', error)
    } else {
        console.log('Archivo editado exitosamente');
    }
});
