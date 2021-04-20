const path = require('path');
const STEAM = require('../util/database').models.STEAM;


exports.postRegistroUsuarioSTEAM = (req, res) => {
    STEAM.create({
        correoElectronico: req.body.correoElectronico,
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        apellidoPaterno: req.body.apellidoPaterno,
        apellidoMaterno: req.body.apellidoMaterno
    }).then(resultado=>{
        res.send("success")
    }).catch(error=>{
        console.log(error);
        res.send("error")
    })
};