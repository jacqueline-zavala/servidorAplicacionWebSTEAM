const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Estatus = sequelize.define('estatus',{
    clave:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.CHAR(15)
    }
});

module.exports = Estatus;