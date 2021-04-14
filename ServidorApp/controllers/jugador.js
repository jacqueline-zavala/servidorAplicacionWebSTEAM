//Obtiene el modelo del jugador
const Jugador = require('../models/jugador');
const path = require('path');
const sequelize = require('../util/database');

//Registra el jugador desde un JSON
exports.postRegistroJugador = (req,res)=>{
    var today = new Date();
    //console.log(req.body.datosJSON)
    //Crea un nuevo objeto JSON con el cuerpo datosJSON proviniente del form de Unity
    //var object = JSON.parse(req.body.datosJSON);
    var object = req.body;
    //console.log(object)
    //Se crea el registro
    Jugador.create({
        username: object.username,
        password: object.password,
        genero: object.genero,
        estadoResidencia: object.estadoResidencia,
        escolaridad: object.escolaridad,
        correo: object.correo,
        fechaNacimiento: object.fechaNacimiento,
        fechaRegistro: today.toString()
    }).then(resultado=>{
        //var redirectString = "/formulario/registro?username=" + object.username + "&carreraInteresInicial=" + object.carreraInteresInicial + "&familiarIngeniero=" + object.familiarIngeniero + "&sabesSTEAM=" + object.sabesSTEAM + "&estudiarIngeniero=" + object.estudiarIngenieria
        //res.redirect(redirectString);
        res.redirect("/jugador/confirmacion?username=" + object.username);
        })
      .catch(error=>{
          res.send(error);
        });
};
// Muestra la página de confirmación
exports.getConfirmacion = (req,res)=>{
    Jugador.findByPk(req.query.username)
    .then(resultado => {
        res.render('confirmacion.html', {
            username: resultado.dataValues.username,
            password: resultado.dataValues.password,
            genero: resultado.dataValues.genero,
            estadoResidencia: resultado.dataValues.estadoResidencia,
            escolaridad: resultado.dataValues.escolaridad,
            correo: resultado.dataValues.correo,
            fechaNacimiento: resultado.dataValues.fechaNacimiento,
            fechaRegistro: resultado.dataValues.fechaRegistro
        })
    });
}
// Muestra la página de confirmación
exports.getFormularioRegistro = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','registro.html'));
}

//Comprueba que el usuario y contraseña del jugadorsean correctos
exports.postIniciarSesion = (req,res)=>{
    var object = JSON.parse(req.body.datosJSON);
    var usuario = object.nombreUsuario;
    var clave = object.clave;
    Jugador.findAll({
        where:{
            nombreUsuario: usuario,
            clave: clave
        }
    })
    .then(registros=>{
        if (registros.length == 0){
            res.send("failed")
        }else{
            registros.forEach(registro=>{
                if (registro.nombreUsuario == usuario && registro.clave == clave){
                    res.send("success")
                }else{
                    res.send("failed")
                }
            });
        }
        
    });
};

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