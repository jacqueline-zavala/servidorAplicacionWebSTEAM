// Importando el módulo para realizar la conexión con la base de datos
const Sequelize = require('sequelize');
// Definir el modelo de la entidad Jugadas
const STEAM = (sequelize)=>{
    sequelize.define('Partida',{
        correoElectronico:{
            type: Sequelize.STRING(30),
            allownull: false,
            primaryKey: true
        },
        contrasena: {
            type: Sequelize.STRING(50),
            allownull: false
        },
        nombre: {
            type: Sequelize.STRING(50),
            allownull: true
        },
        apellidoPaterno: {
            type: Sequelize.STRING(50),
            allownull: false
        },
        apellidoMaterno: {
            type: Sequelize.STRING(50),
            allownull: false
        },
        apellidoMaterno: {
            type: Sequelize.STRING(50),
            allownull: false
        }
    })
}

// Exportamos el modelo
module.exports = STEAM;