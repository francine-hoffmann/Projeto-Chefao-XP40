const { Produtos} = require('../models');
const { Categorias } = require('../models');
const { CategoriaProduto } = require('../models');

const produtoController = {
    listarProduto: async (req, res) => {

        const listaDeProdutos = await Produtos.findAll(
            {
                include: Categorias
            });

        

        res.json(listaDeProdutos);
    },
    listarProdutoPorNome: async (req, res) => {
        const { nome } = req.params;
        console.log(nome)

        const listaDeProdutos = await Produtos.findOne({
            where: {
               nome: nome
            }})

        res.json(listaDeProdutos);
    },
    listarProdutoPorCategoria: async (req, res) => {
        try {
        const { CategoriaId } = req.params;

        const listaDeProdutos = await Produtos.findAll({
            include: [{
                model: Categorias,
                where: {id: CategoriaId},
            }]})

        res.json(listaDeProdutos);
        }
        catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    },

    async cadastrarProduto(req, res) {
        const { nome, descricao, imagem, CategoriaId } = req.body;

        const novoProduto = await Produtos.create({
            nome,
            descricao,
            imagem,
        });

        const categoria = await Categorias.findByPk(CategoriaId)
        console.log(CategoriaId);
        console.log(categoria);

        await novoProduto.setCategorias(categoria);

        res.status(201).json(novoProduto);
    },    

    async deletarProduto(req, res) {
        try {
        const { id } = req.params;

        await Produtos.destroy({
            where: {
                id,
            }
        });

        res.json(204);
    } catch (error) {
        return res.status(500).json('Ocorreu algum problema' + error);
    }
    },

    async atualizarProduto( req, res ) {
        const { id } = req.params;
        const { nome, descricao, imagem } = req.body;

        if (!id) return res.status(400).json('id não enviado');

        const produtoAtualizado = await Produtos.update({
          nome,
          descricao,
          imagem,  
        },
        {
            where: {
                id_Produto:id,
            }
        });

        res.json('Produto atualizado');
    },
};


module.exports = produtoController;