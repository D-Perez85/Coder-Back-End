class Usuario{    
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
/**
 * @description metodo que retorna el nombre completo del usuario usando template strings 
 */
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
/**
 * @description metodo que agrega una mascota (nombre) al array mascotas usando push
 */
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }
/**
 * @descirption metodo que retorna la cantidad de mascotas que tiene el usuario
 */
    countMascotas(){
        return this.mascotas.length;
    }
/**
 * @description metodo que agrega un libro (nombre y autor) al array libros usando push. 
 */
    addBook(nombreLibro, nombreAutor){
        let libro = new Object();
        libro.nombre = nombreLibro;
        libro.autor = nombreAutor;
        this.libros.push({nombreLibro, nombreAutor});
    }
/**
 * @description metodo que retorna un array con solo los nombres de los libros del usuario 
 */
 getBookNames(){
    return this.libros.map((libro) => `${libro.nombreLibro} `);
    }
}
/** -------- Instancia para usuario1 -------- */
let usuario1 = new Usuario("Gonzalo", "Merkel");
let fullNameUsuario1 = usuario1.getFullName(); 
console.log(`---------- Datos Usuario 01 ----------`);
console.log(fullNameUsuario1);
usuario1.addMascota("Tortuga");
usuario1.addMascota("Canario");
console.log(usuario1.countMascotas());
usuario1.addBook("Chicas de Alambre", "Jordi Sierra i Fabra");
usuario1.addBook("Los Escarabajos Vuelan al Atardecer", "Maria Gripe");
console.log(usuario1.getBookNames()); 


// /**-------- Instancia para usuario2 --------*/
let usuario2 = new Usuario("Angela", "Merkel");
let fullNameUsuario2 = usuario2.getFullName(); 
console.log(`\n---------- Datos Usuario 02 ----------`);
console.log(fullNameUsuario2);
usuario2.addMascota("Perro");
console.log(usuario2.countMascotas());
usuario2.addBook("Todo sobre Node.js", "Cortazar");
usuario2.addBook("El amor despues del amor", "Jhon Doe");
usuario2.addBook("La venganza del helicoptero negro", "Morgan Stigman");
console.log(usuario2.getBookNames()); 
