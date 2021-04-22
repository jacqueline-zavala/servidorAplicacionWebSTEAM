const path = require('path');
const Partida = require('../util/database').models.Partida;


// Se crea una nueva partida
exports.postCrearNuevaPartida = (req, res) => {
    var object = req.body
    Partida.create(req.body)
        .then(resultado => {
            res.send({ idPartida: resultado.dataValues.idPartida }) //Enviar de regreso al juego la idPartida
        }).catch(error => {
            //console.log(error);
            res.send("error")
        });
};