//Obtiene el modelo del jugador
const Jugador = require('../models/jugador');
const path = require('path');

//Registra el jugador desde un JSON
exports.postRegistroJugador = (req,res)=>{
    var today = new Date();
    console.log(req.body.datosJSON)
    //Crea un nuevo objeto JSON con el cuerpo datosJSON proviniente del form de Unity
    var object = JSON.parse(req.body.datosJSON);
    console.log(object)
    //Se crea el registro
    Jugador.create({
        nombreUsuario: object.nombreUsuario,
        clave: object.clave,
        genero: object.genero,
        lugarResidencia: object.lugarResidencia,
        escolaridad: object.escolaridad,
        correo: object.correo,
        fechaNac: object.fechaNac,
        fechaRegistro: today.toString()
    }).then(resultado=>{
        res.send("Registro exitoso")
        })
      .catch(error=>{
          res.send(error)
        });
};
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