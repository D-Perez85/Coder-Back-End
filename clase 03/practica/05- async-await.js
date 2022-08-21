/** A) Funcion asincrona basica */
async function f() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("¡Hecho!"), 1000)
    });
    let result = await promise; // espera hasta que la promesa se resuelva (*)
    console.log(result); // "¡Hecho!"
  }
  f();


/** B) Funcion asincrona con params */
  const oper = (value) =>{ // Fn que recibe una operacion y con una promesa la resuelve
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(value)
        }, 100); 
    })
}

async function add(x) { // Fn async que suma un valor recibido por parametro, junto con la suma de dos fn que hacen await de oper
    console.log('Start');
    const a = await oper(20);
    const b = await oper(20);
    console.log('End');
    return x + a + b;
  }

add(10)
 .then(data => console.log(data));

 
async function add2(x) { // En esta opcion el await se realiza sobre las variables p_a y p_a
    const p_a = suma(20);
    const p_b = suma(30);
    return x + await p_a + await p_b;
    }

add2(10)
  .then(data => console.log(data));

 