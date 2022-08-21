/** Realizaremos una funcion que reciba un objeto y muestre cada dos segundos sus claves y valores en este formato: [clave, valor]
 *  Usar: entries, async y await  */
 
// A) Funcion sincronica

function mostrar(values) {
    let contador = 0; 
    setInterval(()=>{
        contador = contador + 1 
        console.log(` Iteracion n° ${contador} : `, Object.entries(values));
    }, 2000)
}   
values = { Nombre: 'Juan', Apellido: 'Perez', edad: 25 }
mostrar(values)

// B) Funcion asincronica

async function esperar(value) {
    let contador = 0;
    setInterval(() => {
        console.log(`Iteracion n° ${contador++} : `  ) 
        console.log(Object.entries(value))
    }, 2000);
}

const muestreo = async function(objeto) {
    let result = await esperar(objeto);
    return result; 
}
values =  { Nombre: 'Aldo', Apellido: 'Merkel', edad: 20 }
muestreo(values)

// C) Funcion asincronica II

async function f() {
    let promise = new Promise((resolve) => {
      setTimeout(() => resolve("02"), 2000)
    });
    let result = await promise; // espera hasta que la promesa se resuelva (*)
    console.log(result); 
    console.log('03');

}
console.log('01');
  f();

