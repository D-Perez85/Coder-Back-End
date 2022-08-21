/** Determinar el comportamiento de los console.log y explicar el  comportamiento de this en cada llamada */
var nombre = "Tom";

const rouco = {
    nombre: 'Rouco',
    especie: 'gato',
    saludar() {
        console.log(`Miauuu hola me llamo ${this.nombre}`);
        console.log(this === rouco);
    }
};

rouco.saludar();  // output?  Miau hola me llamo rouco & true

/** Wrong */
let saludar = rouco.saludar; // No existe nombre y especie en este contexto
saludar(); // output? Miau hola me llamo undefined & undefined


/** Fine */
let saludo = rouco; // instancia correcta
saludo.saludar(); // output? Miau hola me llamo rouco & true
