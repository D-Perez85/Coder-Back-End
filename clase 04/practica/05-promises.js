const fs = require('fs/promises'); 

/** Crear un dir usando promises*/
fs.mkdir('./files_promises')
    .then(()=> console.log("directorio creado exitosamente"))
    .catch((error)=> console.log(error.message))


/** Leer archivo con then y catch */
fs.readFile('./files_promises/archivo.txt', 'utf-8')
    .then((texto)=> console.log(texto))
    .catch((error)=> console.log(error.message)); 


/** Leer archivo con async y await + concatenacion */
const escribir = async (texto) =>{
    fs.writeFile('./files_promises/archivo.txt', texto)
}
console.log('Inicio Programa');  
const leerArchivo = async()=>{
try {
    const texto = await fs.readFile('./files_promises/archivo.txt', 'utf-8')
    const textoNuevo = texto + '\nAdd de datos'; 
    await escribir(textoNuevo); 
    console.log(textoNuevo);  
} catch (error) {
    console.log(error.message);
    } 
}
leerArchivo(); 
console.log('Fin Programa'); 