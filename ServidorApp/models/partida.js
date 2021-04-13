const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Partida = sequelize.define('Partida',{
    idPartida:{
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING(50),
        references: {
            model: 'Jugador',
            key: 'username'
        }
    },
    puntuacionAcumulada: {
        type: Sequelize.INTEGER,
        allownull: true
    },
    vidas: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    estatus: {
        type: Sequelize.STRING(15),
        allownull: false
    },
    fechaInicio:{
        type: Sequelize.DATE,
        allownull: false

    },
    fechaFinal:{
        type: Sequelize.DATE,
        allownull: true

    },
    inventario:{
        type: Sequelize.INTEGER,
        allownull: false
    }
});

module.exports = Partida;