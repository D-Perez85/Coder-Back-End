/** Propiedades rest son para la desestructuracion de objetos */
const { pera, manzana, ...carnes } = { pera: 'pera', manzana: 'manzana', roja: 'asado', magra: 'cerdo', avicola: 'pollo' };

// console.log(pera);
// console.log(manzana);
// console.log(carnes);
// console.log(carnes.magra);

/** Propiedades spread son para la asignacion */
const cosas = { pera, manzana, ...carnes };
// console.log(cosas);


// Practica 

const sinSpread = (...args)=>{
    console.log(args);
}
sinSpread('a', 'b', 'c', 'd', 'e'); 

// Funcion sin argumento spread

const conSpread = (a, b, c, d, e) => {
    console.log(a, b, c, d, e);
}
conSpread('a', 'b', 'c', 'd', 'e'); 