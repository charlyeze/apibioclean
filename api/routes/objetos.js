const express = require('express');
const router = express.Router(); 
const ObjetosController = require('../controllers/objetos');
const buscarModelo = require('../middleware/buscarModelo');
const completar = require('../middleware/completar');
const controlUsuario = require('../middleware/controlToken');

router.post('/', controlUsuario, buscarModelo, completar, ObjetosController.objeto_post);

module.exports = router;