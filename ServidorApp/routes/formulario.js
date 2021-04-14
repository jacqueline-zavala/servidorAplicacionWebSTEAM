const express = require('express');
const router = express.Router();
//Trae los controladores dle jugador
const formularioController = require('../controllers/formulario')

router.get('/registro',formularioController.getRegistroFormulario);

module.exports = router;