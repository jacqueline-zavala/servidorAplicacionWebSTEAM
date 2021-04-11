const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Partida = sequelize.define('partida',{
    clave:{
        type: Sequelize.INTEGER,
        allownull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING(20),
        references: {
            model: 'Jugador',
            key: 'nombreUsuario'
        }
    },
    puntuacionAcumulada: {
        type: Sequelize.INTEGER,
        
    },
    vidas: {
        type: Sequelize.INTEGER,
    },
    estatus: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Estatus',
            key: 'clave'
        }
    },
    tiempoTotalAcumulado:{
        type: Sequelize.TIME,

    },
    inventario:{
        type: Sequelize.INTEGER
    }

});

module.exports = Partida;