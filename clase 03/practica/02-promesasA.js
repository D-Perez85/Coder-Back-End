/** PROMISES  */

/*  Ejemplo fast food : 
   - Ordeno Hamburguesa -> recibo Ticket n° 50 (Promesa: pending) 
   - Esta lista -> (Promesa: fullfiled) -> valor: Hamburguesa
   - No hay mas -> (Promesa: rejected)  -> error: No quedo pan */


/** A) Ejemplo de Promesa basica */
const promiseHambur = new Promise((resolve, reject) => {
let exito = true; // Esta promesa depende de este estado
    if(exito) resolve('Se resolvio la promesa')
    else reject('Se produjo un error')
});

promiseHambur
.then((data)=> console.log(data))
.catch((error)=> console.log(error))

/** B) Ejemplo de Promesa - Practica ejemplo Fast Food*/
const hamburguerPromise = new Promise((resolve, reject)=>{
    const randomNumber = Math.round(Math.random()); 
    if(randomNumber === 1) resolve('Hamburguesa entregada')
    else reject('No hay mas pan')
})

/** B.1) Opcion con Promise */
hamburguerPromise
.then((data)=> console.log(data))
.catch((error)=> console.log('Hubo un problema con el pedido.', error))


/** B.2) Opcion con Async */
const resolverHamburguesa = async () =>{
    try{
        const result = await hamburguerPromise; 
        console.log(result);
    }
    catch(error){
        console.log('Hubo un problema con el pedido');
        console.log(error);
    }
}
resolverHamburguesa(); 


/** C) Ejemplo de Promesa */
const funcionPromise = new Promise((resolve ,reject)=>{
    const number = 6; 
        setTimeout(()=>{ 
            number > 5 ? resolve(number) : reject (new Error (`${number} es menor al set`))
        }, 1000); 
    }); 

funcionPromise
  .then((data)=>{ //Metodo que ejecuta la fn por parametro si la promesa finaliza OK
    console.log('Resuelto', data);
})
.catch((err)=>{ //Metodo que ejecuta la fn por parametro si la promesa finaliza con ERROR
    console.log(`Unresolved, ${err}`);
})
.finally(()=>{ //Metodo que ejecuta la fn por parametro una vez finalizada la promesa (no importa el estado)
    console.log(`Esto se ejecuta si o si`);
}); 
   



/** D) Promesas encadenadas */
const cadena = new Promise((resolve, reject)=>{
   setTimeout(()=> resolve(1), 1000); 
})

cadena
.then((data)=>{
   console.log(data) //1
   return data * 2
})
.then((data)=>{
   console.log(data) // 2
   return data * 2
})
.then((data)=>{
   console.log(data) // 4
   return data * 2
})
.finally(()=>{
   console.log(`Fin de la promesa`);
})




