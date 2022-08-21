// Funcion Standar
function nombreFuncion(p1, p2){
/** 
 * cuerpo funcion 
*/
console.log(p1,p2);
return "OK" // =>  sin esto se genera el famoso undefined
console.log("Texto"); // return finaliza la ejecucion de la fn - esto no aparece
}
nombreFuncion("Hola", "Chau"); // Ejecucion de la funcion parametrizada


// A) sin llaves: return en una sola linea (implicito)
const sumar = (a, b) => a + b;
    let op1 = 46;
    let op2 = 57;
let resultado = sumar(op1, op2);
console.log(`La suma de ${op1} más ${op2} es igual a ${resultado}`);

// B) con llaves, para multiples instrucciones
const multiplicar = (a, b) => {
    let resultado = a * b;
    return resultado;
};
console.log(`El numero ${op1} multiplicado por ${op2} es igual a ${multiplicar(op1, op2)}`);

// C) sin parentesis: solo un argumento
const dobleDe = a => a * 2;
console.log(`El doble de ${op1} es ${dobleDe(op1)}`);

// D) como funcion anonima
const saludar = () => {
console.log('Hola Mundo');
}
saludar();

// E) retorna un objeto
const getPersona = () => ({ nombre: 'Emanuel', edad: 26 });
console.log(getPersona());
