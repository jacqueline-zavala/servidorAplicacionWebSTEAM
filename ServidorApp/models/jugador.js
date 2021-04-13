const Sequelize = require('sequelize');
//Traer el objeto sequelize 
const sequelize = require('../util/database');

//Definicion del modelo (tabla)
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
        allowNull: false,
    },
    estadoResidencia:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    paisResidencia:{
        type: Sequelize.STRING(50),
        allowNull: false,
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

module.exports = Jugador;