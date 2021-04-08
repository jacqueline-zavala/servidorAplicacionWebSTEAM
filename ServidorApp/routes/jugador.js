const express = require('express');
const router = express.Router();
//Trae los controladores dle jugador
const JugadorController = require('../controllers/jugador')

//Registra un nuevo usuario en la base de datos desde el juego
router.post('/registro',JugadorController.postRegistroJugador);

//Obtiene los datos del usuario cuando inicia sesion
router.post('/iniciarSesion',JugadorController.postIniciarSesion);

module.exports = router;