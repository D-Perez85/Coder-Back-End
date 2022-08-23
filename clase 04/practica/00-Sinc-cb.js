/** A) Callstack - Proceso Bloqueante */

const function1 = () => console.log('F1'); 
const function2 = () =>{
    function1(); 
    console.log('F2');
}
const function3 = () =>{
    function2()
    console.log('F3');
}
function3(); 


/** B) Callback de ejecucion Sincronica */

const delay = ret => {
    for(let i = 0; i < ret * 3e6; i++);
}

function hacerTarea(num) {
    console.log('haciendo tarea:', num);
    delay(100);
}

console.log('inicio de la tarea');
hacerTarea(1);
hacerTarea(2);
hacerTarea(3);
hacerTarea(4);
console.log('fin de la tarea');
console.log('otras tareas...');
