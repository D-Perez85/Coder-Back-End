/**  A) Callback Queue - Proceso No-Bloqueante - Proceso async basado en callback */

const function1 = () => console.log('F1'); 
const function2 = () => console.log('F2'); 
const function3 = () => console.log('F3'); 

const promise = new Promise((resolve) => {
    resolve(function3)
}); 
const function4 = () => console.log('F4'); 


function1();  // codigo bloqueante 
setTimeout(function2, 2000) // codigo no bloqueante
setTimeout(function3, 1000) // codigo no bloqueante
function4(); // codigo bloqueante



/** B) Callback Jobs Queue - Proceso No-Bloqueante basado en Promises */

function1(); 
setTimeout(function2, 2000); 
promise.then(()=> function3())
function4(); 

/** C) Callbacks - Ejecucion Aincronica */
function hacerTarea(num, cb) {
    console.log('haciendo tarea', num);
    setTimeout(cb, 100);
}

console.log('inicio de las tareas');
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de las tareas')
            });
        });
    });
});
console.log('fin de las tareas');

