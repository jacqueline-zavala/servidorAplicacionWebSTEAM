const Partida = require('../util/database').models.Partida;
const path = require('path');

// Se crea una nueva partida
exports.getRegistroFormulario = (req,res)=>{
    Partida.create({
        
    }).then(resultado=>{
        res.send("success")
    }).catch(error=>{
        console.log(error);
        res.send("error")
    });
};