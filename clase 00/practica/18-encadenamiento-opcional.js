/**  Permite leer el valor de una propiedad de una cadena de objetos conectados sin validar que cada referencia en la cadena este vacia   */

const aventurero = {
    nombre: "Emanuel",
    gato: {
        nombre: "Dina"
    }
};

const a = aventurero.gato?.nombre;
console.log(a); // Dina
const b = aventurero.perro?.nombre;
console.log(b); // undefined
console.log(aventurero.cualquierMetodo?.()); // undefined
