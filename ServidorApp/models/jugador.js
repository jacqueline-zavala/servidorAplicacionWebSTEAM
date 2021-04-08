const Sequelize = require('sequelize');
//Traer el objeto sequelize 
const sequelize = require('../util/database');

//Definicion del modelo (tabla)
const Jugador = sequelize.define('jugador',{
    nombreUsuario:{
        type: Sequelize.STRING(15),
        allowNull: false,
        primaryKey: true
    },
    clave:{
        type: Sequelize.STRING(20),
        allowNull: false
    },
    genero:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Genero',
            key: 'idGenero'
        }
    },
    lugarResidencia:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Estado',
            key: 'idEstado'
        }
    },
    escolaridad:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Escolaridad',
            key: 'idEscolaridad'
        }
    },
    correo:{
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: false
    },
    fechaNac:{
        type: Sequelize.DATEONLY,
        allowNull: false,
        primaryKey: false
    },
    fechaRegistro:{
        type: Sequelize.DATEONLY,
        allowNull: false,
        primaryKey: false
    }
});

module.exports = Jugador;