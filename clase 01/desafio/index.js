/**Definir variables variables que almacenen los siguiente datos:
 - Un nombre: “pepe” 
 - Una edad: 25
 - Un precio: $99.90
 - Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
 - Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
 - Mostrar todos esos valores por consola
 - Incrementar la edad en 1 y volver a mostrarla
 - Agregar una serie a la lista y volver a mostrarla */

let nombre = "pepe";
let edad = 25;
let precio = "$99.90";
const misSeriesFavoritas = ["Dark", "Mr Robot", "Castelvania"];
let misPeliculasFavoritas = [
  {
    titulo: "León, el Profesional",
    estreno: 1994,
    protagonistas: ["Jean Reno", "Natalie Portman"],
  },
  {
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    estreno: 2001,
    protagonistas: ["Elijah Wood", "Ian McKellen"],
  },
  {
    titulo: "El Señor de los Anillos: Las dos torres",
    estreno: 2002,
    protagonistas: ["Elijah Wood", "Sean Bean"],
  },
  {
    titulo: "El Señor de los Anillos: El retorno del rey",
    estreno: 2003,
    protagonistas: ["Elijah Wood", "Viggo Mortensen"],
  },
];

console.log(nombre);
console.log(edad);
console.log(precio);
console.log(misSeriesFavoritas);
console.log(misPeliculasFavoritas);

edad += 1;
console.log(edad);

misSeriesFavoritas.push("Los favoritos de midas");
console.log(misSeriesFavoritas);

