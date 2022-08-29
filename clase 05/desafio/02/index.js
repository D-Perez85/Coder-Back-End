const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]

const nombresProductos = productos.map(value => value.nombre).join(',');
console.log('Nombres de los productos: ', nombresProductos);
('-------------------------------------------------------------------------')
const initialValue = 0;
let precioTotal = productos.reduce((previous, current) => previous + current.precio, initialValue);
precioTotal = Number(precioTotal.toFixed(2));
console.log('Precio total: ', precioTotal);
('-------------------------------------------------------------------------')
let precioPromedio = precioTotal / productos.length;
precioPromedio = Number(precioPromedio.toFixed(2));
console.log('Precio promedio: ', precioPromedio);
('-------------------------------------------------------------------------')
const preciosProductos = productos.map(value => value.precio);
const menorPrecio = Math.min(...preciosProductos)
console.log('Producto con menor precio: ', menorPrecio);
const mayorPrecio = Math.max(...preciosProductos)
console.log('Producto con mayor precio: ', mayorPrecio);
('-------------------------------------------------------------------------')
const obj = {
    precioTotal,
    nombresProductos,
    precioPromedio,
    menorPrecio,
    mayorPrecio
}
console.log(obj);