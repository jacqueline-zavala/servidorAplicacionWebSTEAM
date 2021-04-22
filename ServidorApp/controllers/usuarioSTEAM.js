const path = require('path');

const STEAM = require('../util/database').models.STEAM;
const { encrypt, decrypt } = require('../util/crypto');

exports.postRegistroUsuarioSTEAM = (req, res) => {
    var hashedPassword = encrypt(req.body.contrasena);
    var pass = hashedPassword.iv+ '|' + hashedPassword.content
    STEAM.create({
        correoElectronico: req.body.correoElectronico,
        contrasena: pass,
        nombre: req.body.nombre,
        apellidoPaterno: req.body.apellidoPaterno,
        apellidoMaterno: req.body.apellidoMaterno,
        puesto: req.body.puesto
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

exports.getPaginaPrincipal = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views', '/principalSTEAM.html'));
}

exports.getFormularioRegistro = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views', '/registroSTEAM.html'));
}

exports.getLogin = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views', '/loginSTEAM.html'));
}

exports.getConfirmacion = (req, res) => {
    UsuarioSTEAM.findByPk(req.query.correoElectronico)
    .then(resultado => {
        var jsonDecrypt = {
            iv: resultado.contrasena.split('|')[0],
            content: resultado.contrasena.split('|')[1]
        };
        res.render('confirmacion.html', {
            correoElectronico: resultado.dataValues.correoElectronico,
            contrasena: decrypt(jsonDecrypt), //resultado.dataValues.password,
            nombre: resultado.dataValues.nombre,
            apellidoPaterno: resultado.dataValues.apellidoPaterno,
            apellidoMaterno: resultado.dataValues.apellidoMaterno,
            puesto: resultado.dataValues.puesto
        })
    });
}