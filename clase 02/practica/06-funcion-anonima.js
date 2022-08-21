/** Fn convencional y una fn anonima, (anonima se guarda en memoria pero no conserva ninguna referencia) */


let array = [1, 2, 3, 4];

array.forEach(function(num) {
    console.log(num);
});

array.forEach(char => {
    console.log(char);
});
