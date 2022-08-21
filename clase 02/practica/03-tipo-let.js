/** Variable declarada con let reduce aun mas su alcance, limitandolo al bloque donde fue declarada */

function foo() {
    let i = 0;

    if (true) {
        let i = 1;
        console.log('dentro del if:', i); // imprime 1
    }

    console.log('fuera del if', i); // imprime 0
}

foo();
