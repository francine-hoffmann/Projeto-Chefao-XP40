const db = require('../database');
const { DataTypes } = require('sequelize');

const Carrosel = db.define('Carrosel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    
    link_imagem: {
        type: DataTypes.STRING,
    },
   
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
{
    tableName: 'carrosel'
});

module.exports = Carrosel;