const fs = require('fs');

// console.log('Inicio Programa');
fs.mkdir('./files_cb', (error) => {
    if(error) console.log(error.message) 
    else console.log('Directorio creado correctamente');
    console.log('Fin Programa');
})


/** Leer un archivo usando callback y manejo de errores  */
const leer = () =>{ 
    fs.readFile('./files_cb/archivo.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log('Hubo un error');
            console.log( error.message)
        } else {
            let texto = data + ' \nnueva Data'; 
            fs.writeFile('./files_cb/archivo.txt', texto, (error) =>{
                if (error) {
                    console.log('Hubo un error');
                    console.log( error.message)
                }else{
                    console.log('Archivo creado exitosamente');
                }
                    console.log('Fin Programa');
            })
            console.log('contenido:', data);
        }
    })
}    
leer(); 


