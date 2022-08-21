/** String.matchAll retorna un iterador de los resultados de ocurrencia en una cadena de texto contra una expresion regular
 */


const cadena = 'Im learning Javascript no Java';
const regexp = /Java[a-z]*/gi;

let result = cadena.matchAll(regexp); 

for (match of result){
    console.log(match);
}
