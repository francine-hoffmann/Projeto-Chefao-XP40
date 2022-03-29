const db = require('../database');
const { DataTypes } = require('sequelize'); 
const Produtos = require("./Produtos");
const Categorias = require("./Categorias");

const CategoriaProduto = db.define('CategoriaProduto', {
    produtoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Produtos,
            key: 'id',
            onDelete: 'cascade',
        },
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorias,
            key: 'id',
            onDelete: 'cascade',
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
        tableName: 'categoria_produto',
    }
);

module.exports = CategoriaProduto;