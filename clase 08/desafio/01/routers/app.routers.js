const express = require('express');
const personasRoutes = require('./personas/personas.routes');
const mascotasRoutes = require('./mascotas/mascotas.routes');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: 'Ruta inicial - Pruebe los paths: /personas  -  /mascotas para ver la funcionalidad'});
  });
  
router.use('/personas', personasRoutes);
router.use('/mascotas', mascotasRoutes);

module.exports = router;