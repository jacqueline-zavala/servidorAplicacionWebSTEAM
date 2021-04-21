// Se importa el módulo express
const express = require('express');

// Se declara un objeto de tipo router
const router = express.Router();

//Trae los controladores del jugador
const PartidaController = require('../controllers/partida');

//Registra un nuevo usuario en la base de datos desde el juego
router.post('/crearPartida', PartidaController.postCrearNuevaPartida);


// Se exporta el router
module.exports = router;