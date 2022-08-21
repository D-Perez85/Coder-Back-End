/** A) Definir la fn mostrarLista (reciba una lista de datos y muestra su contenido), si está vacía muestre mensaje: “lista vacía”. 
*      Invocarla con datos de prueba para verificar que funciona bien en ambos caso 
*/

let lista =  [{id: 1, nota: "Comprar Pan"}, {id: 2, nota: "Homework English"}, {id: 3, nota: "Have a nap"}]; 
let lista2 = []; 

function mostrarNotas (value) {
    if(value.length > 0){
        console.log(`Lista de notas: `);
        for (let x = 0; x < value.length; x++) {
            if(value.length !== 0){
            console.log(`ID ${value[x].id}  - ${value[x].nota}`);
            }
        }
    }else{
        console.log(`lista vacía`);
    }
}
mostrarNotas(lista); 


/** B) Definir una fn anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente. Pasar lista con 3 nros como argumento */

let number = [2,3,4]; 
let numbers = []; 

((value)=>{
    if(value.length > 0){
        console.log(`Lista de nros: `);
        for (let x = 0; x < value.length; x++) {
            if(value.length !== 0){
            console.log(`${value[x]}`);
            }
        }
    }else{
        console.log(`No existen nros`);
    }
})(number)


/** C) Definir fn crearMultiplicador que reciba un nro y devuelva una fn anónima que reciba segundo nro y dé como resultado el producto de ambos.
 *  A partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores. */

function crearMultiplicador(numero) {
    return function (numero2) {
      return numero * numero2;
    };
  }
  
  const duplicar = (numero) => {
    return crearMultiplicador(numero)(2);
  };
  const triplicar = (numero) => {
    return crearMultiplicador(numero)(3);
  };

  console.log(duplicar(5));
  console.log(triplicar(5));