const fs = require('fs')

/** Leer un archivo usando callback y manejo de errores  */
const leer = () =>{ 
    fs.readFile('../../package.json', (error, data) => {
        if (error) {
            console.log('Hubo un error');
            console.log( error.message)
        } else {
            const package = JSON.parse(data)
            const info = {
                contenidoStr:  (JSON.stringify(package)),
                contenidoObj: (package),
                size: package.size
            }
            let texto = JSON.stringify(info, null, 2)
            fs.writeFile('../../info.txt', texto, (error) =>{
                if (error) {
                    console.log('Hubo un error');
                    console.log( error.message)
                }else{
                    console.log('Archivo creado exitosamente');
                }
            })
        }
    })
}    
leer(); 



