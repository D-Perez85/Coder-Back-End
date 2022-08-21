/** Flat crea una matriz con los subelementos de un array concatenados */

// A)
const array = [1,2,3,[4,5]]; 
console.log(array.flat()); // [ 1,2,3,4,5 ]
// B)
const array1 = [1,2,[3,4,[5,6]]]; 
console.log(array1.flat(1)); // [ 1,2,3,4, [ 5,6 ]]
// D)
const array2 = [1,2,[3,4,[5,6]]]; 
console.log(array2.flat(2)); // [ 1,2,3,4,5,6 ]
// D)
const array3 = [1,2,[3,4,[5,6, [7,8,9,10]]]]; 
console.log(array3.flat(Infinity)); // [ 1,2,3,4,5,6,7,8,9,10 ]
// E)
const array4 = [1,2, ,4]; 
console.log(array4.flat()); // [ 1,2,4 ]