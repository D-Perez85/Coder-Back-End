/** Definir una fn que reciba como parametros dos valores y una fn con la operacion a realizar, debe devolver el resultado.
  * Definir: suma, resta, multiplicacion, division y modulo. Todas reciben dos parametros y devuelven el resultado. Utilizar fn flecha  */

const suma = (numero1, numero2) => numero1 + numero2; 
const resta = (numero1, numero2) => numero1 - numero2; 
const multiplicacion = (numero1, numero2) => numero1 * numero2; 
const division = (numero1, numero2) => numero1 / numero2; 
const modulo = (numero1, numero2) => numero1 % numero2; 


/** --- Opcion A --- ) */
const operacion = (n1, n2, op) => {
    const operations ={
        '+' : n1 + n2,
        '-' : n1 - n2,
        '/' : n1 / n2,
        '*' : n1 * n2 
    }; 
    const result = operations[op] ? operations[op] : operations['+']; 
    return result;  
}

/** --- Opcion B --- ) */
const operacionB = (numero1, numero2, op) => {
    return op(numero1, numero2) 
}
/** Pruebas Opcion A) */
console.log('--------- Pruebas fn A ----------');
console.log(operacion(4, 2, '+'));
console.log(operacion(6, 2, '-'));
console.log(operacion(4, 4, '*'));
console.log(operacion(10, 2, '/'));
/** Pruebas Opcion B) */
console.log('--------- Pruebas fn B ----------');
console.log(operacionB(4, 2, suma));
console.log(operacionB(6, 2, resta));
console.log(operacionB(4, 4, multiplicacion));
console.log(operacionB(10, 2, division));
console.log(operacionB(10, 5, modulo));