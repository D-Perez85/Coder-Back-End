/** Fn que reciba una cantidad de args y retorne la suma de los mismos en un array de un unico elemento.  
 *  Obtendremos un array que retorne el resultado de 3 operaciones de suma con args varios - Usar spread y rest */

const sumar = (...args) =>{
    let salida = 0; 
    args
    .filter((a)=> typeof a == 'number')
    .forEach((value)=> salida +=value); 
        return [salida]
}
const result = sumar(2, 3, 'a', null, 5, 'pepe', undefined); 
console.log(result);