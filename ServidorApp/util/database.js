//Configuración de Sequelize
const Sequelize = require('sequelize');

//Conexión con la base de datos
const sequelize = new Sequelize('RetoDB', 'sa', 'Password1234$', {
    dialect: 'mssql',
    dialectOptions: {
        options: {
            useUTC: false,
            dataFirst: 1
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

//Exportando el objeto sequelize
module.exports = sequelize;