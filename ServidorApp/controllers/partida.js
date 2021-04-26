const path = require('path');
const Partida = require('../util/database').models.Partida;
const sequelize = require('../util/database');
const Sequelize = require('sequelize');

// Se crea una nueva partida
exports.postCrearNuevaPartida = (req, res) => {
    var object = req.body;
    Partida.create(req.body)
        .then(resultado => {
            res.send({ idPartida: resultado.dataValues.idPartida }) //Enviar de regreso al juego la idPartida
        }).catch(error => {
            //console.log(error);
            res.send("error")
        });
};

// Se crea una nueva partida
exports.getCrearNuevaPartida = (req, res) => {
    Partida.create({
        JugadorUsername: req.query.username
    }).then(resultado => {
        var datosUsuario = {
            username: req.query.username,
            correo: req.query.correo,
            idPartida: resultado.dataValues.idPartida
        }
        res.send(datosUsuario);
        }).catch(error => {
            res.send("error")
        });
};

//Guarda la partida
exports.postGuardarPartida = (req,res) => {
    var object = JSON.parse(req.body.datosJSON);
    console.log(object.idPartida)
    sequelize.query("UPDATE Partida SET puntuacionAcumulada=" + object.puntuacionAcumulada + ", vidas= "+object.vidas + ", inventario=" + object.inventario + " WHERE idPartida=(select TOP 1 idPartida from partida Where JugadorUsername = '"+ object.username + "' AND estatus = 'En progreso' order by idPartida DESC)")
    .then(resultado => {
        res.send("success");
    }).catch(error =>{
        console.log(error);
        res.send(error)
    })

    
};

//Guarda la partida
exports.postFinalizarPartida = (req,res) => {
    var object = JSON.parse(req.body.datosJSON);
    sequelize.query("UPDATE Partida SET puntuacionAcumulada=" + object.puntuacionAcumulada + ", vidas= "+object.vidas + ", inventario=" + object.inventario + ", estatus= 'Perdido', fechaFinal= GETDATE() WHERE idPartida=(select TOP 1 idPartida from partida Where JugadorUsername = '"+ object.username + "' AND estatus = 'En progreso' order by idPartida DESC)")
    .then(resultado => {
        res.send("success");
    }).catch(error =>{
        console.log(error);
        res.send(error)
    })
    // Partida.update({
    //     puntuacionAcumulada: object.puntuacionAcumulada,
    //     vidas: object.vidas,
    //     inventario: object.inventario,
    //     fechaFinal: Sequelize.fn('GETDATE'),
    //     estatus: "Perdido"
    //     },{
    //     where: {
    //         idPartida: object.idPartida
    //     }
    // })
};