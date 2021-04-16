//Obtiene el modelo del jugador
const Jugador = require('../models/jugador');

const path = require('path');

// Se obtiene el objeto de conexión a base de datos
const sequelize = require('../util/database');

//Registra el jugador desde un JSON
exports.postRegistroJugador = (req,res)=>{
    var today = new Date();
    var object = req.body;
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