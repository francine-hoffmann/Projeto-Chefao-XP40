const Categorias = require('./Categorias');
const Produtos = require('./Produtos');
const Carrosel = require('./Carrosel');
const Avaliacao = require('./Avaliacao');
const CategoriaProduto = require('./CategoriaProduto');

// Produtos.belongsTo(Categorias, {
//     foreingkey: 'CategoriaId',
// });

// Categorias.hasMany(Produtos, {
//     foreingKey: 'CategoriaId',
// });

Produtos.belongsToMany(Categorias, {
    foreingkey: 'categoriaId',
    through: CategoriaProduto
});

Categorias.belongsToMany(Produtos, {
    foreingkey: 'produtoId',
    through: CategoriaProduto
});

Avaliacao.belongsTo(Produtos, {
    foreingkey: 'ProdutoId',
});

Produtos.hasMany(Avaliacao, {
    foreingKey: 'ProdutoId',
});


module.exports = {
    Categorias,
    Produtos,
    Carrosel,
    Avaliacao,
};