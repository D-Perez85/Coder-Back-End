// /** CALLBACKS  */

/** A) Ej 01 - Callback basico*/
const ejecutar = unaFuncion => unaFuncion(); 
const saludar = () => console.log("saludos"); 
ejecutar(saludar)
 

/** B) Ej 02 */
const suma  = (a,b) => a+b // funcion de operaciones
const func1 = (cb1, cb2) => { //funcion que recibe dos callbacks
    return cb1(2,2)  + cb2(4,4)
}
console.log(`El resultado de la suma es:  ${func1(suma, suma)}`); // paso solo declaracion, sin ejecución


/** C) Ej 03 - combinacion de codigo externo con interno*/
// Fn externa a ejecutar
const generarDoc = (dato,cb) => {
const result = dato + ' procesado ' // generar el documento con el dato
cb(result) // ejecución
}
// // Fn interna de logica
const procesarDato = (texto)=>{
    const escrito = 'El dato que se obtuvo fue este => ' + texto; 
    console.log(escrito); 
}
generarDoc('Hola', procesarDato) // ejecución con pase de parametros (texto + callback)


/** D) Ej 04 */
const formatearFecha = f => `${f.getDate()}-${f.getMonth() + 1}-${f.getFullYear()}`;
const escribirArchivo = (ruta, datos, callback) => {
    let fecha = formatearFecha(new Date());
    callback(false, fecha, 'escritura exitosa');
}
const log = (error, fecha, mensaje) => console.log(`${fecha}: ${mensaje}`);
escribirArchivo('/ruta/al/archivo', 'datos', log);
escribirArchivo('/ruta/al/archivo', 'datos', (error, fecha, mensaje) => {
    console.log(`por callback: ${fecha} - ${mensaje}`);
});


