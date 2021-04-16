const path = require('path');
const Jugador = require('../util/database').models.Jugador;
const { encrypt, decrypt } = require('../util/crypto');
//Registra el jugador desde un JSON
exports.postRegistroJugador = (req,res)=>{
    var object = req.body
    var hashedPassword = encrypt(object.password);
    var pass = hashedPassword.iv+ '|' + hashedPassword.content
    //Se crea el registro
    Jugador.create({
        username: object.username,
        password: pass,//object.password,
        genero: object.genero,
        estadoResidencia: object.estadoResidencia,
        escolaridad: object.escolaridad,
        correo: object.correo,
        fechaNacimiento: object.fechaNacimiento,
    }).then(resultado=>{
        var url = "/formulario/registro?username=" + object.username + "&carreraInteresInicial=" + object.carreraInteresInicial + "&familiarIngeniero=" + object.familiarIngeniero + "&sabesSTEAM=" + object.sabesSTEAM + "&estudiarIngenieria=" + object.estudiarIngenieria;
        res.redirect(url);
        })
      .catch(error=>{
          //res.send(error);
          res.redirect("formularioRegistro")
        });
};

// Muestra la página de confirmación
exports.getConfirmacion = (req,res)=>{
    Jugador.findByPk(req.query.username)
    .then(resultado => {
        var jsonDecrypt = {
            iv: resultado.password.split('|')[0],
            content: resultado.password.split('|')[1]
        };
        res.render('confirmacion.html', {
            username: resultado.dataValues.username,
            password: decrypt(jsonDecrypt),//resultado.dataValues.password,
            genero: resultado.dataValues.genero,
            estadoResidencia: resultado.dataValues.estadoResidencia,
            escolaridad: resultado.dataValues.escolaridad,
            correo: resultado.dataValues.correo,
            fechaNacimiento: resultado.dataValues.fechaNacimiento,
            fechaRegistro: resultado.dataValues.fechaRegistro
        })
    });
}

// Muestra el formulario de registro
exports.getFormularioRegistro = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','registro.html'));
}

// Seleccionar los registros de la tabla jugador para mostrarlos en el tablero
exports.getRegistros = (req, res) => {
    Jugador.findAll()
    .then(registros => {
        var datos = [];
        registros.forEach(registro => {
            datos.push(registro.dataValues);
        });
        res.render('tablero.html', {jugadores: datos});
    });
}

exports.postIniciarSesion = (req,res) => {
    Jugador.findByPk(req.body.username)
        .then(jugador => {
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