// Importando el módulo para realizar la conexión con la base de datos
const Sequelize = require('sequelize');

// Importando la conexión de la base de datos
const sequelize = require('../util/database');

// Definir el modelo de la entidad Formulario
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

// Exportamos el modelo
module.exports = Formulario;