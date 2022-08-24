/** 
A) Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info.
B) Mostrar este objeto info en la consola.
C) Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
D) Mostrar los errores por consola  
*/

const fs = require('fs/promises'); 

fs.readFile('../../info.txt', 'utf-8')
    .then((texto)=> {
        let info = JSON.parse(texto)
        console.log(info)   
        console.log(`Editor inicial: ${info.contenidoObj.author}`);
        let author = "CoderHouse"; 
        info.contenidoObj.author = author; 
        console.log(`Editor modificado: ${info.contenidoObj.author}`);
        let text = JSON.stringify(info, null, 2)
        fs.writeFile('../../package.json.coder.txt', text)
    })
    .catch((error)=> console.log(error.message)); 



