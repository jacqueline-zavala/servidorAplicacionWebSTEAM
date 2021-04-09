const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Jugadas = sequelize.define('jugadas',{
    clave_minijuego:{
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        references:{
            model: 'Minijuego',
            key: 'clave'
        }
    },
    clave_partida: {
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true,
        references: {
            model: 'Partida',
            key: 'clave'
        }
    },
    tiempoInvertido: {
        type: Sequelize.TIME,
        
    },
    puntaje: {
        type: Sequelize.INTEGER,
    }

});

module.exports = Jugadas;