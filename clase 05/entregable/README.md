# BACK END - Entregable n° 2

###  Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

    o Save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado. Save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
    o GetById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
    o GetAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
    o DeleteById(Number): void - Elimina del archivo el objeto con el id buscado.
    o DeleteAll(): void - Elimina todos los objetos presentes en el archivo.

### El proyecto implementa el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.Cuenta con un módulo de pruebas llamado contenedor, es una instancia de productos que ejecuta cada una de las operaciones y las guarda en el archivo: “productos.txt”


