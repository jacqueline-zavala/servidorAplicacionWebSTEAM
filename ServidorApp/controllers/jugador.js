const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
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
    var object = JSON.parse(req.body.datosJSON)
    Jugador.findByPk(object.username)
        .then(jugador => {
            var jsonDecrypt = {
                iv: jugador.password.split('|')[0],
                content: jugador.password.split('|')[1]
            };
            // "select TOP 1 * from partida Where JugadorUsername = "+ object.username + " order by idPartida DESC"
            if(jugador.username == object.username && decrypt(jsonDecrypt) == object.password){
                sequelize.query("select TOP 1 * from partida Where JugadorUsername = '"+ object.username + "' AND estatus = 'En progreso' order by idPartida DESC",{
                    type: Sequelize.QueryTypes.SELECT
                }).then(ultimaPartida => {
                    if(ultimaPartida.length > 0)
                    {
                        var partida = ultimaPartida[0];
                        //Si ya tiene una partida manda el ID de la útima partida
                        var datosUsuario = {
                            username: jugador.username,
                            correo: jugador.correo,
                            idPartida: partida.idPartida
                        }
                        res.send(datosUsuario);
                    }
                    else
                    {
                        res.redirect('/partida/agregarPartida?username='+ jugador.username + '&correo=' + jugador.correo);
                    }

                }).catch(err=>{
                    //Si no tiene, manda un 0 que indique que no tiene partidas.
                    var datosUsuario = {
                        username: jugador.username,
                        correo: jugador.correo,
                        idPartida: 0
                    }
                    res.send(JSON.parse(datosUsuario));
                })
            }
            else{
                res.send('failed');
            }
        })
}

//Modifica los datos del Jugador especificado;
exports.postEditarPerfil = (req,res) => {
    var object = JSON.parse(req.body.datosJSON);
    var hashedPassword = encrypt(object.password);
    var pass = hashedPassword.iv+ '|' + hashedPassword.content
    Jugador.update({
        password: pass,
        correo: object.correo
        },{
        where: {
            username: object.username
        }
    }).then(resultado=>{
        res.send("success");
    }).catch(error=>{
        console.log(error);
        res.send("error");
    })
};
exports.getPaginaPrincipal = (req, res) => {
    res.sendFile(path.join(__dirname,'..','views','principal.html'));
}
