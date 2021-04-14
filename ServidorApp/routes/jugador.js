const express = require('express');
const router = express.Router();
//Trae los controladores dle jugador
const JugadorController = require('../controllers/jugador')

//Registra un nuevo usuario en la base de datos desde el juego
router.post('/registro',JugadorController.postRegistroJugador);

//Muestra el html de formulario de registro
router.get('/formularioRegistro',JugadorController.getFormularioRegistro);

//Obtiene los datos del usuario cuando inicia sesion
router.post('/iniciarSesion',JugadorController.postIniciarSesion);

// Redirigir a la página de confirmación
router.get('/confirmacion', JugadorController.getConfirmacion);



module.exports = router;