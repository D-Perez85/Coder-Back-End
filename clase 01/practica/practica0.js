var a = 10;
console.log(a); //output? = 10
(function(){
   var a = 20;
   console.log(a); //output? = 20
   if (true) {
       var a = 30; //output? = 30
       console.log(a); //output? = 30
       a = 25; //output? = 25
       console.log(a); //output? = 25
    }
    console.log(a); //output? = 25
})()
console.log(a); //output? = 10

let b = 10;
(function(){
   let b = 20;
   console.log(b); //output? = 20
   if (true) {
       let b = 30;
       b = 40;
       console.log(b); //output? = 40
    }
    console.log(b); //output? = 20
})()
console.log(b); //output? = 10


const c = 10;
(function(){
   console.log(c); //output? = 10
   if (true) {
       const c = 30;
       console.log(c); //output? = 30
    }
    console.log(c); //output? = 10
})()
console.log(c); //output? = 10


