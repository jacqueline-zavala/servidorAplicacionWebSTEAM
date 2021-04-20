const path = require('path');
const STEAM = require('../util/database').models.STEAM;
const { encrypt, decrypt } = require('../util/crypto');

exports.postRegistroUsuarioSTEAM = (req, res) => {
    var hashedPassword = encrypt(req.body.password);
    var pass = hashedPassword.iv+ '|' + hashedPassword.content
    STEAM.create({
        correoElectronico: req.body.correoElectronico,
        contrasena: pass,
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

exports.postIniciarSesion = (req,res) => {
        STEAM.findByPk(req.body.username)
        .then(usuario => {
            var hashedPassword = encrypt(req.body.password);
            var pass = hashedPassword.iv+ '|' + hashedPassword.content
            if(jugador.username == req.body.username && jugador.password == pass){
                res.send('success');
            }
            else{
                res.send('failed');
            }
        })
}