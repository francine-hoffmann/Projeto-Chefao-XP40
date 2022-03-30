const { Avaliacao } = require('../models');
const { Produtos } = require('../models');

const avaliacaoController = {
    listarAvaliacao: async (req, res) => {

        const listaDeAvaliacao = await Avaliacao.findAll();

        res.json(listaDeAvaliacao);
           
    },
listarAvaliacaoPorProduto: async (req, res) => {
    try {
    const { ProdutoId } = req.params;

    const listaDeProdutos = await Avaliacao.findAll({
        where: {
            ProdutoId: ProdutoId
        },
    include: Produtos
})

    res.json(listaDeProdutos);
    }
    catch (error) {
        return res.status(500).json('Ocorreu algum problema' + error);
    }
},
};

module.exports = avaliacaoController;