const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Formulario = sequelize.define('Formulario',{
    idFormulario:{
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING(50),
        allownull: false,
        references: {
            model: 'Jugador',
            key: 'username'
        }
    },
    carreraInteresInicial: {
        type: Sequelize.STRING(30),
        allownull: false
        
    },
    familiarIngeniero: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    sabesSTEAM: {
        type: Sequelize.TEXT,
        allownull: false
    },
    estudiarIngenieria: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    minijuegoFavorito: {
        type: Sequelize.STRING(30),
        allownull: true
    },
    carreraInteresFinal: {
        type: Sequelize.STRING(30),
        allownull: true
    }

});

module.exports = Formulario;