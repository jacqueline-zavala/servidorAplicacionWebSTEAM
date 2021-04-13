const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Jugadas = sequelize.define('Jugadas',{
    minijuego:{
        type: Sequelize.STRING(30),
        allownull: false,
        primaryKey: true,
    },
    idPartida: {
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        references: {
            model: 'Partida',
            key: 'idPartida'
        }
    },
    fechaInicio: {
        type: Sequelize.DATE,
        allownull: false
    },
    fechaFinal: {
        type: Sequelize.DATE,
        allownull: true
    },
    puntaje: {
        type: Sequelize.INTEGER,
        allownull: false
    }

});

module.exports = Jugadas;