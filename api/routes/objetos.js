const express = require('express');
const router = express.Router(); 
const ObjetosController = require('../controllers/objetos');
const buscarModelo = require('../middleware/buscarModelo');
const controlUsuario = require('../middleware/controlToken');

router.post('/', controlUsuario, buscarModelo, ObjetosController.objeto_post);

module.exports = router;