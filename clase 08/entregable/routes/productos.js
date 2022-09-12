const Producto = require('../claseProducto.js');
const {Router} = require('express'); 
const router = Router(); 

router.get('/', (req, res) => {
    let productos = Producto.productos
    // res.send({productos});
    res.status(201).json({productos});
});

router.get('/:id', (req, res) => {
    let id = req.params.id;  
    let producto = Producto.productos.find(producto => producto.id === Number(id));
    if (producto) {
        res.send(producto);
    } else {
        res.status(404).send({ error: `El ID ingresado (${id}) no existe en la lista de productos`});
    }
});

router.post('/', (req, res) => {
    let { title, price, thumbnail } = req.body;
    const producto = { title, price, thumbnail };
    producto.id = Producto.productos.length + 1;
    Producto.productos.push(producto);
    res.send(producto);
});

router.put('/:id', (req, res) => {
    let { title, price, thumbnail } = req.body;
    let id = req.params.id;  
    let index = Producto.productos.findIndex(producto => producto.id === Number(id));
     if (index >= 0) {
        Producto.productos[index] = { title, price, thumbnail };
        Producto.productos[index].id = Number(id);
        res.send(Producto.productos[index]);
    }else{
        res.status(404).send({ error: `El ID ingresado (${id}) no existe en la lista de productos`});
    }
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;  
    let index = Producto.productos.findIndex(producto => producto.id === Number(id));
    if (index >= 0) {
        Producto.productos.splice(index, 1);
        res.send({ message: 'Producto eliminado de la lista' });
    } else {
        res.status(404).send({ error: `El ID ingresado (${id}) no existe en la lista de productos`});
    }
})

module.exports = router;