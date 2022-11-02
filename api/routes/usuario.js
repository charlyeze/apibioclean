const express = require('express');
const router = express.Router(); 
const UsuarioController = require('../controllers/usuario');

router.post('/',  UsuarioController.login);

module.exports = router;