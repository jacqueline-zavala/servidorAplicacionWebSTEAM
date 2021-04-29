const path = require('path');
const STEAM = require('../util/database').models.STEAM;
const { encrypt, decrypt } = require('../util/crypto');

exports.postRegistroUsuarioSTEAM = (req, res) => {
    if(req.body.adminPass == 'admin'){
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
            res.redirect("confirmacion?correoElectronico="+resultado.dataValues.correoElectronico)
        }).catch(error=>{
            console.log(error);
            res.send("error")
        })
    }else{
        //       res.send("ERROR. CONTRASEÑA DE ADMINISTRADOR INVALIDA.");
        res.redirect("formularioRegistro?error=1");
    }
    
};
exports.postIniciarSesion = (req,res) => {
        STEAM.findByPk(req.body.correoElectronico)
        .then(usuario => {
            var jsonDecrypt = {
                iv: usuario.dataValues.contrasena.split('|')[0],
                content: usuario.dataValues.contrasena.split('|')[1]
            };
            if(usuario.username == req.body.username && decrypt(jsonDecrypt) == req.body.contrasena){
                res.redirect("tablero")
            }
            else{
                //res.send('Contraseña incorrecta');
                res.redirect("iniciarSesion?error=1")
            }
        }).catch(error=>{
            res.redirect("iniciarSesion?error=2")
            //res.send("Correo no registrado.")
        })
}

exports.getPaginaPrincipal = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views', '/principalSTEAM.html'));
}

exports.getFormularioRegistro = (req, res) => {
    //res.sendFile(path.join(__dirname, '..', '/views', '/registroSTEAM.html'));
    if(req.query == {})
    {
        res.render('registroSTEAM.html', {
            error: 0
        });
    }
    else
    {
        res.render('registroSTEAM.html', {
            error: req.query.error
        });
    }
}

exports.getLogin = (req, res) => {
    //res.sendFile(path.join(__dirname, '..', '/views', '/loginSTEAM.html'));
    if(req.query == {})
    {
        res.render('loginSTEAM.html', {
            error: 0
        });
    }
    else
    {
        res.render('loginSTEAM.html', {
            error: req.query.error
        });
    }
}

exports.getTablero = (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views', '/tableu.html'));
}

exports.getConfirmacion = (req, res) => {
    STEAM.findByPk(req.query.correoElectronico)
    .then(resultado => {
        var jsonDecrypt = {
            iv: resultado.contrasena.split('|')[0],
            content: resultado.contrasena.split('|')[1]
        };
        res.render('confirmacionSTEAM.html', {
            correoElectronico: resultado.dataValues.correoElectronico,
            contrasena: decrypt(jsonDecrypt), //resultado.dataValues.password,
            nombre: resultado.dataValues.nombre,
            apellidoPaterno: resultado.dataValues.apellidoPaterno,
            apellidoMaterno: resultado.dataValues.apellidoMaterno,
            puesto: resultado.dataValues.puesto
        })
    });
}