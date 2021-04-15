//Configuración de Sequelize
const Sequelize = require('sequelize');

//Conexión con la base de datos
const sequelize = new Sequelize('retoDB', 'sa', 'Password1234$', {
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

// Sobreescribe el formato de la fecha
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
  };

//Exportando el objeto sequelize
module.exports = sequelize;