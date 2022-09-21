const { ProductosApi } = require('../models');
const productosApi = new ProductosApi();

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('pages/index'));

router.get('/productos', (req, res) => res.render('pages/history', { productos: productosApi.listarTodos()}));

router.post('/productos', (req, res) => {
    productosApi.guardar(req.body);
    res.redirect('productos');
});

module.exports = router