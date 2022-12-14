/**  Clases en typescript: podemos usar patrones orientados a objetos, herencia, interfaces y otras implementaciones */

// definimos una clase abstracta, esta clase NO PUEDE SER INSTANCIADA
abstract class Persona {
    protected nombre: string;

    protected constructor(nombre: string) {
        this.nombre = nombre;
    }
}

// definimos la clase Empleado, que extiende de Persona
class Empleado extends Persona {

    // propiedad privada
    private departamento: string;

    constructor(nombre: string, departamento: string) {
        super(nombre);
        this.departamento = departamento;
    }

    public presentacion() {
        return `Hola soy ${this.nombre} y trabajo en ${this.departamento}`;
    }
}

let emanuel = new Empleado("emanuel", "informatica");
console.log(emanuel.presentacion());
