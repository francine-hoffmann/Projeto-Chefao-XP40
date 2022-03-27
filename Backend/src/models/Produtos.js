const db = require('../database');
const { DataTypes } = require('sequelize');
const Categorias = require('./Categorias');

const Produtos = db.define('Produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.STRING,
    },
    link_imagem: {
        type: DataTypes.STRING,
    },
    CategoriaId: {
        type: DataTypes.INTEGER,
        references: {
            models: Categorias,
            key: "CategoriaId"
        },
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
{
    tableName: 'produto'
});

module.exports = Produtos; 