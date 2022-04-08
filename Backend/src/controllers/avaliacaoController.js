const { Avaliacao } = require('../models');
const { Produtos } = require('../models');

const avaliacaoController = {
    listarAvaliacao: async (req, res) => {

        const listaDeAvaliacao = await Avaliacao.findAll({include: Produtos});

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

async cadastrarAvaliacao(req, res) {
    const { nome, link_imagem } = req.body;

    const novoAvaliacao = await Carrosel.create({
        nome, link_imagem,
    });

    res.status(201).json(novoAvaliacao);
    }
};

module.exports = avaliacaoController;