//Se obtiene el modelo del formulario
const Formulario = require('../models/formulario');

const path = require('path');

// Se envía la información del registro a la entidad formulario
exports.getRegistroFormulario = (req,res)=>{
    Formulario.create({
        username: req.query.username,
        carreraInteresInicial: req.query.password,
        familiarIngeniero: req.query.genero,
        sabesSTEAM: object.estadoResidencia,
        estudiarIngenieria: object.paisResidencia,
    }).then(resultado=>{
    console.log(req.query)
    res.redirect("/jugador/confirmacion");
    }).catch(error=>{
        console.log(error);
    });
};