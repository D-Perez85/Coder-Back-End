/*. Crear un objeto en forma literal que cumpla con los siguientes puntos:
    a. Debe contener una propiedad llamada 'meses' que almacene un array con meses del año.
    b. Implementará un método 'mostrarMeses' que muestre por consola los valores de dicho array mes a mes.
    c. También se declarará un método 'getNumeroMes' que se le pasará el nombre del mes y retornará su número asociado (1 a 12).
    d. Por último, se declarará un método 'getLetrasMes' que devolverá un string con las primeras letras de cada mes.

    Llamar a las funciones con los parámetros correspondientes y mostrar sus resultados por consola. Utilizar para la resolución, en lo posible, expresiones sencillas del lenguaje JavaScript.

    */

let calendario = {
  meses: [
    {
      id: 1,
      name: "Enero",
    },
    {
      id: 2,
      name: "Febrero",
    },
    {
      id: 3,
      name: "Marzo",
    },
    {
      id: 4,
      name: "Abril",
    },
    {
      id: 5,
      name: "Mayo",
    },
    {
      id: 6,
      name: "Junio",
    },
  ],
  mostrarMeses: function () {
    console.log(`Lista de meses: `);
    for (let x = 0; x < this.meses.length; x++) {
      console.log(`Mes ${this.meses[x].id} : ${this.meses[x].name}`);
    }
  },
  mostrarNro: function (a) {
    for (let x = 0; x < this.meses.length; x++) {
      if (a === this.meses[x].id) {
        console.log(`Ud ingreso ${a} corresponde al mes de: ${this.meses[x].name}`);
      } 
    }
  },
  mostrarLetras: function () {
    console.log(`Lista de meses con Primeras Letras: `);
    for (let x = 0; x < this.meses.length; x++) {
        console.log(`Mes ${this.meses[x].name.substr(0,2)} `);
      }
      
  },
  nombre: "calendar",
};
console.log("--------------------------------------------");
console.log(`El nombre del objeto es ${calendario.nombre}`);
console.log("--------------------------------------------");
calendario.mostrarMeses();
console.log("--------------------------------------------");
calendario.mostrarNro(5); 
console.log("--------------------------------------------");
calendario.mostrarLetras(); 
console.log("--------------------------------------------");