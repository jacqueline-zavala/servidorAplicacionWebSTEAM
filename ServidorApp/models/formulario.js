// Importando el módulo para realizar la conexión con la base de datos
const Sequelize = require('sequelize');

const Formulario = (sequelize)=>{
    sequelize.define('Formulario',{
        idFormulario:{
            type: Sequelize.INTEGER,
            allownull: false,
            primaryKey: true,
            autoIncrement: true
        },
        carreraInteresInicial:{
            type: Sequelize.STRING(30),
            allowNull: false
        },
        familiarIngeniero:{
            type: Sequelize.INTEGER,
            allowNull: false, //cambiar despues de asesoria
        },
        sabesSTEAM:{
            type: Sequelize.STRING(100),
            allowNull: false, //cambiar despues de asesoria
        },
        estudiarIngenieria:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        minijuegoFavorito:{
            type: Sequelize.STRING(30),
            allowNull: true,
        },
        carreraInteresFinal:{
            type: Sequelize.STRING(30),
            allowNull: true,
        }
    })
}
// Exportamos el modelo
module.exports = Formulario;