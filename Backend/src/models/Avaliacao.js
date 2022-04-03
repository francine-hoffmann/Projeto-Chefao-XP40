const db = require('../database');
const { DataTypes } = require('sequelize');
const Produtos = require('./Produtos')

const Avaliacao = db.define('Avaliacao', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING
    },
    link_imagem: {
        type: DataTypes.STRING,
    },
    mensagem: {
        type: DataTypes.STRING
    },
    ProdutoId: {
        type: DataTypes.INTEGER,
        references: {
            models: Produtos,
            key: "ProdutoId"
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
    tableName: 'avaliacoes'
});

module.exports = Avaliacao;