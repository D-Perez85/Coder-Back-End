
const f1 = () => console.log('F1');
const f2 = () => console.log('F2');
const f3 = () => console.log('F3');

const principal = () =>{
    console.log('principal');

setTimeout(f1, 50); 
setTimeout(f3,30); 

new Promise((resolve, reject)=>{
    resolve('promB');
}).then(result => console.log(result)); 

new Promise((resolve, reject)=>{
   setTimeout(()=> resolve('promC'), 1000) ;
}).then(result => console.log(result)); 


new Promise((resolve, reject)=>{
    resolve('promA');
}).then(result => console.log(result)); 

f2(); 
}
principal(); // principal - F2 -promB -promA - F3 - F1 - promC