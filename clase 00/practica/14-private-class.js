/** Uso de propiedades privadas de una clase - se definen utilizando el prefijo hash #  */

class Persona {
    nombre; 
    #apellido; 
    constructor(nombre, apellido) {
        this.nombre = nombre; 
        this.#apellido = apellido
    }
    getInfo(){
        console.log(`Mi nombre completo es : ${this.nombre} ${this.#apellido}`);
    }
    // Declaro un metodo público que cambie las variables privadas
    cambiarApellido(nuevo){
        this.#apellido = nuevo
    }
}

const instancia1 = new Persona('Juan', 'Perez');
instancia1.getInfo();
instancia1.nombre = 'Adrian' // Si se puede porque es variable de ambito público
//instancia1.#apellido= 'Lopez' // No se puede acceder por ser una variable con propiedad privada
instancia1.cambiarApellido('Martinez'); 
instancia1.getInfo();
