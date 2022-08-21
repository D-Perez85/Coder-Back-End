/** Object en js devuelve un array con los valores a las propiedades enumerables de un objeto */

/** A) retorna valores del objeto en formato Array */
const object1 = { a: 'a', b: 42, c: false};
let a = Object.values(object1)
console.log(a, `${a.length} posiciones`)

/** A.1) retorna keys del objeto en formato Array */
const object2 = { a: 'a', b: 42, c: false};
let b = Object.keys(object2)
console.log(b, `${b.length} posiciones`)

/** B) retorna array como objeto con una ordenacion aleatoria de las claves */
const object3 = { 100: 'a', 2: 'b', 7: 'c', 14: 'd' };
let c = Object.values(object3)
console.log(c, `${c.length} posiciones`);

/** C) getFoo no es una propiedad enumerable, por lo que no se devuelve */
const object4 = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
object4.foo = 'bar';
console.log(Object.values(object4));

// // los parametros que no son objetos se fuerzan a que se comporten como tal
// console.log(Object.values('foo'));
