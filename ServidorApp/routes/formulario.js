const express = require('express');
const router = express.Router();
//Trae los controladores dle jugador
const formularioController = require('../controllers/formulario')

router.get('/registro/:username&:carreraInteresInicial&:familiarIngeniero&:sabesSTEAM&:estudiarIngenieria&:minijuegoFavorito&:carreraInteresFinal');

module.exports = router;