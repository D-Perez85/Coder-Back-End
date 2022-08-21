/** Object.entries() - devuelve una matriz de pares de una propiedad enumerable [key, value]  */

var obj = { foo: 'bar', baz: 42 };
//convierte cada campo del objeto a un array
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

/** Array de objetos con ordenamiento aleatorio */
var array = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(array)); // [ [ '2', 'b'], ['7', 'c'], ['100', 'a'] ]

/** getFoo es una propiedad no enumerable */ 
var myObj = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar' ] ]
console.log(Object.entries('foo')); // [ [ '0', 'f' ], [ '1', 'o' ], [ '2', 'o' ] ]

/** Iterando sobre la clave-valor del objeto */ 
var obj2 = { a: 5, b: 7, c: 9 };
for (var [key, value] of Object.entries(obj2)) {
    console.log(key + ' ' + value);
}

/**  Lo mismo pero utilizando arreglos */
Object.entries(obj2).forEach(([key, value]) => {
    console.log(key + ' ' + value);
});


/** Practica : Duplicar el valor de las key (sueldo) para un array de objetos  */

const salarios = {juan: 1000, pepe: 2500, felipe: 3000, franco: 3700}; 
//convierto a array
console.log(Object.entries(salarios));
//recorro y asigno nuevo valor
const result = Object.entries(salarios).map(([key, value]) => [key , value *2]); 
//conviero a objeto nuevamente
const newObj = Object.fromEntries(result); 
//imprimo los resultados
console.log('Salarios iniciales: ', salarios);
console.log('Salarios finales: ', newObj);
