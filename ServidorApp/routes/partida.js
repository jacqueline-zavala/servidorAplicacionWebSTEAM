//Se importa el módulo express
const express = require('express');
// Se declara un objeto de tipo router
const router = express.Router();
//Trae los controladores del jugador
const PartidaController = require('../controllers/partida');

//Registra un nuevo usuario en la base de datos desde el juego
router.post('/agregarPartida', PartidaController.postCrearNuevaPartida);

// Registra una nueva partida 
router.get('/agregarPartida', PartidaController.getCrearNuevaPartida);

// Guarda la partida en curso
router.post('/guardarPartida', PartidaController.postGuardarPartida);

// Finaliza la partida
router.post('/finalizarPartida', PartidaController.postFinalizarPartida);

// Obtiene el top 10 de mejores puntuaciones en el jeugo
router.get('/mejoresPuntuaciones', PartidaController.getMejoresPuntuaciones);


// Se exporta el router
module.exports = router;
