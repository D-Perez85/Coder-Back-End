/** String padding rellena una cadena actual con una cadena dada de modo que alcance una longitud determinada
 *  Recibe como 1er parametro la cantidad obligatoria de caracteres, como 2do con que lo relleno. 
 *  - padStart() rellena desde el inicio de la cadena
 *  - padEnd() rellena aplicando desde el final de la cadena   */

//Ejemplos
console.log('abc'.padStart(10)); //       abc
console.log('abc'.padEnd(10)); //abc

console.log('abc'.padStart(10, 'foo')); //foofoofabc
console.log('abc'.padEnd(10, 'foo')); //abcfoofoof

console.log('abc'.padStart(6, '123456'));//123abc
console.log('abc'.padEnd(6, '123456')); //abc123

console.log('5'.padStart(2, '0')); // 05
console.log('5'.padEnd(2, '0')); // 50

const numero = "105581";
const ultimos4Digitos = numero.slice(-4);
const mascara = ultimos4Digitos.padStart(numero.length, '*');
console.log(mascara);

const cadena = 'Gato';
console.log(cadena.padEnd(6, '.')); //Gato..

const cadena2 = '200';
console.log(cadena2.padEnd(5)); //200
