// Importando el módulo para realizar la conexión con la base de datos
const Sequelize = require('sequelize');
// Definir el modelo de la entidad Jugadas
const Partida = (sequelize)=>{
    sequelize.define('Partida',{
        idPartida:{
            type: Sequelize.INTEGER,
            allownull: false,
            primaryKey: true
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
            allownull: false,
            defaultValue: Sequelize.fn('GETDATE')
        
        },
        fechaFinal:{
            type: Sequelize.DATE,
            allownull: true
        
        },
        inventario:{
            type: Sequelize.INTEGER,
            allownull: false
        }
    })
}

// Exportamos el modelo
module.exports = Partida;