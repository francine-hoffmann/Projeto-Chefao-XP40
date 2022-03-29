const db = require('../database');
const { DataTypes } = require('sequelize'); 

const Categorias = db.define('Categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        ,
    },
    nome: {
        type: DataTypes.STRING,
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
    tableName: 'categoria',
});

module.exports = Categorias;