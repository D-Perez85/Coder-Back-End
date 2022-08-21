/** ejemplo de uso del metodo includes()  determina si una arreglo incluye un determinado elemento  */

 const array = [1, 2, 3];
 console.log(array.includes(2)); // true
 
 const pets = ['cat', 'dog', 'bat'];
 console.log(pets.includes('cat')); // true
 console.log(pets.includes('at')); // false

 [1, 2, 3].includes(2);  // true
 [1, 2, 3].includes(4);  // false
 [1, 2, 3].includes(3, 3);   // false
 [1, 2, 3].includes(3, -1); // true
 [1, 2, NaN].includes(NaN); // true
 
 var arr = ['a', 'b', 'c'];
 arr.includes('c', 3); // false
 arr.includes('c', 100); // false
 

 console.log(arr);