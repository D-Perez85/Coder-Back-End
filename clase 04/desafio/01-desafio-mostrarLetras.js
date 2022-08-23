/** Desarrollar la fn mostrarLetras que reciba un string como parametro y muestre un caracter por segundo */

/** Opcion normal */
// const mostrarLetras = (palabra, tiempo, cb) => {
//   let letra = 0;
//   const timer = setInterval(() => {
//     if (palabra[letra]) {
//       console.log(palabra[letra]);
//       letra++;
//     } else {
//       clearInterval(timer);
//       cb();
//     }
//   }, tiempo);
// };
// const fin = () => console.log("fin calback");

/** Prueba de funiones a 0 - 250 - 500 ms */
// mostrarLetras("Probando", 0, fin);
// mostrarLetras('Coder', 250, fin);
// mostrarLetras('Back End Dev', 500, fin);



/** Opcion con Promise */
const mostrarLetras = (palabra, tiempo, cb) => {
  let letra = 0;
  return new Promise((resolve, reject)=>{
    const timer = setInterval(() => {
      if (palabra[letra]) {
        console.log(palabra[letra]);
        letra++;
      } else {
        clearInterval(timer);
        cb();
        resolve(); 
      }
    }, tiempo);
  })
};
const fin = () => console.log("fin calback");
const tiempo = 200; 
/** Ejecucion */
mostrarLetras("Probando", tiempo, fin)
 .then(()=>mostrarLetras('Coder', tiempo, fin))
 .then(()=> mostrarLetras('Back End Dev', tiempo, fin))
 .finally(()=> console.log('Fin del codigo'))



