// Importando el módulo para realizar la conexión con la base de datos
const Sequelize = require('sequelize');

// Importando la conexión de la base de datos
const sequelize = require('../util/database');

// Definir el modelo de la entidad Jugadas
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

// Exportamos el modelo
module.exports = Jugadas;