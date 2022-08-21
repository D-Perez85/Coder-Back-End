/** Variable global y su alcance, se reemplaza su valor dentro de la funcion --no es recomendable manejar variables globales */

var i = "global";

function foo() {
    i = "local";
    console.log(i); // Reasignacion - imprime local
}

foo();
console.log(i) // imprime local
