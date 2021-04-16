// Importando el módulo para realizar la conexión con la base de datos
const Sequelize = require('sequelize');

//Traer el objeto sequelize 
const sequelize = require('../util/database');

// Definir el modelo de la entidad Jugador
const Jugador = sequelize.define('Jugador',{
    username:{
        type: Sequelize.STRING(50),
        allowNull: false,
        primaryKey: true
    },
    password:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    genero:{
        type: Sequelize.STRING(20),
        allowNull: true, //cambiar despues de asesoria
    },
    estadoResidencia:{
        type: Sequelize.STRING(50),
        allowNull: true, //cambiar despues de asesoria
    },
    escolaridad:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    correo:{
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    fechaNacimiento:{
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    fechaRegistro:{
        type: Sequelize.DATEONLY,
        allowNull: false,
    }
});

// Exportamos el modelo
module.exports = Jugador;