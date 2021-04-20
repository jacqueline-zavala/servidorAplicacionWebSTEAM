const Jugadas = require('../util/database').models.Jugadas;
const path = require('path');

// Se registra una nueva jugada
exports.getRegistroFormulario = (req,res)=>{
    Jugadas.create({
        
    }).then(resultado=>{
        res.send("success")
    }).catch(error=>{
        console.log(error);
        res.send("error")
    });
};