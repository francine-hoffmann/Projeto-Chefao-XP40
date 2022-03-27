const Categorias = require('./Categorias');
const Produtos = require('./Produtos');
const Carrosel = require('./Carrosel');
const Avaliacao = require('./Avaliacao');

Produtos.belongsTo(Categorias, {
    foreingkey: 'CategoriaId',
});

Categorias.hasMany(Produtos, {
    foreingKey: 'CategoriaId',
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