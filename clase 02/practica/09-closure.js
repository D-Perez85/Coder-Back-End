/** fn closure (guarda referencias del estado adyacente) => Permite acceder al ámbito de una fn exterior desde una fn interior*/

/** Opcion A) */
function crearFuncion() {
    var nombre = "closure";
    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}

//var miFuncion = crearFuncion(); // ahora miFuncion, tiene acceso a las variables internas de crearFuncion
//miFuncion(); // ahora es de tipo closure


/** Opcion B) */

let equipo = "Nob"; 

function miFuncion(){
    let count = 1; 
    console.log(equipo);
        function contador(){
            console.log(equipo);   
            count++; 
            console.log(count);
        }
        setInterval(contador, 2000); 
}
miFuncion(); 
