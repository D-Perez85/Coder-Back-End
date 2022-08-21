/** Sirve para eliminar espacios en blanco ocupados por tabulaciones, etc */

const string = '        Esto es mas que una cadena de texto        '; 

console.log(string.trimStart()); // Borra espacios al principio
console.log(string.trimEnd()); // Borra espacios al final
console.log(string.trim()); // Borra espacios al principio y al final