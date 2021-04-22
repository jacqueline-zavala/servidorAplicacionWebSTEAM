const Jugadas = require('../util/database').models.Jugadas;

const path = require('path');

// Se registra una nueva jugada
exports.postAgregarJugada = (req,res) => {
    Jugadas.create(req.body)
        .then(resultado =>{
            res.send("success")
        }).catch(error=>{
            console.log(error);
            res.send("error")
        });
};


