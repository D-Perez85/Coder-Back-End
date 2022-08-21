/** Fn que devuelve un array y retorna el resultado de la potenciacion en caso de poder realizarla. De no ser posible, devolver null  */

var array = ['6**2', '**', '3**3', '4**a', '4**5', '8**2**', '4*=5'];

const salida = array 
//Filtro los campos que tienen **
.filter((value) => value.includes('**')) 
// recorro los valores restantes del array
.map((value)=>{ 
// convierto cada string en un array con split: '6**2' ==> '6','2'
const output = value.split('**'); 
    // si tengo 2 elementos o elementos vacios retorno null
    if(output.length  !=2 || output.includes('')) return null; 
    // si tengo valores que no son nros retorno null
    if(isNaN(output[0] ** output[1])) return null
    return output[0] ** output[1]
}); 
console.log(salida);