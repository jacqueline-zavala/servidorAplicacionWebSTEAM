const Jugadas = require('../util/database').models.Jugadas;

const path = require('path');

// Se registra una nueva jugada
exports.postAgregarJugada = (req,res) => {
    var object = JSON.parse(req.body.datosJSON);
    Jugadas.create(object)
        .then(resultado =>{
            res.send("success")
        }).catch(error=>{
            console.log(error);
            res.send("error")
        });
};


