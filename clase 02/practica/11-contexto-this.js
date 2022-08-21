/** this almacena la instancia del objeto actual. El contexto varia dependiendo de donde se haga uso del this */

function foo(arg1, arg2) {
    console.log(this, arg1, arg2);
}

foo('Hola', 'Mundo');

/** This en este caso me muestra todo el contexto global desde ese punto de ejecucion  */


/** Opcion B) */

const Person = {
    name: "Peddro", 
    age: 20, 
    greeting: function() {
        console.log('THIS ===> ', this);
        return `Hello ${this.name} woow you are ${this.age} years old`
    }
}
console.log(Person.greeting());

/** Opcion C) */

const Persona = {
    name: "Peddro", 
    age: 20, 
    greeting: function() {
        console.log('THIS ===> ', this);
        return `Hello ${this.name} woow you are ${this.age} years old`
    }
}
const saludar = Persona.greeting;  
console.log(saludar());