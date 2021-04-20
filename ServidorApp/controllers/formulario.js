const Formulario = require('../util/database').models.Formulario;
const path = require('path');

// Se envía la información del registro a la entidad formulario
exports.getRegistroFormulario = (req,res)=>{
    Formulario.create({
        JugadorUsername: req.query.username,
        carreraInteresInicial: req.query.carreraInteresInicial,
        familiarIngeniero: req.query.familiarIngeniero,
        sabesSTEAM: req.query.sabesSTEAM,
        estudiarIngenieria: req.query.estudiarIngenieria,
    }).then(resultado=>{
        res.send(resultado.dataValues.idFormulario);
        res.redirect("/jugador/confirmacion?username=" + req.query.username);
    }).catch(error=>{
        console.log(error);
    });
};