const { ProductosApi } = require('../models');
const productosApi = new ProductosApi();

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))
  
router.get('/productos', async (req, res) => {
const lista = await productosApi.listarTodos()
res.render('products', { lista, existProducts: lista.length > 0 ? true : false})
})

router.post('/productos', (req, res) => {
productosApi.guardar(req.body);
    res.redirect('productos');
});

module.exports = router;