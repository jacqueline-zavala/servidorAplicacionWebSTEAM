const path = require('path');
const Partida = require('../util/database').models.Partida;


// Se crea una nueva partida
exports.postCrearNuevaPartida = (req, res) => {
    var object = req.body
    Partida.create({
        puntuacionAcumulada: object.puntuacionAcumulada,
        vidas: object.vidas,
        estatus: object.estatus,
        inventario: object.inventario,
        JugadorUsername: object.JugadorUsername
    }).then(resultado => {
        res.send({ idPartida: resultado.dataValues.idPartida }) //Enviar de regreso al juego la idPartida
        console.log(resultado)
            //resultado.dataValues.idPartida
    }).catch(error => {
        console.log(error);
        res.send("error")
    });
};