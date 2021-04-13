//Obtiene el modelo del jugador
const Formulario = require('../models/formulario');
const path = require('path');

exports.getRegistroFormulario = (req,res)=>{
    console.log(req.params)
    res.redirect("/jugador/confirmacion");
};