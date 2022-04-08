const { Produtos} = require('../models');
const { Categorias } = require('../models');
const { CategoriaProduto } = require('../models');

const produtoController = {
    listarProduto: async (req, res) => {
        var limiteQuery = parseInt(req.query.limite);
        var paginaquery = parseInt(req.query.pagina);

        let pagina = 1
        let limite = 10000
        
        if (!isNaN(paginaquery)) {
            pagina = paginaquery;
        }

        if (!isNaN(limiteQuery)) {
            limite = limiteQuery
        }

        const listaDeProdutos = await Produtos.findAll(
            {
                include: Categorias, 
                limit: limite,
                offset: ((pagina - 1) * limite)
            });

        res.json(listaDeProdutos);
    },
    listarProdutoPorId: async (req, res) => {
        const { id } = req.params;

        const listaDeProdutos = await Produtos.findOne({
            where: {
               id: id
            }})

        res.json(listaDeProdutos);
    },
    listarProdutoPorCategoria: async (req, res) => {
        try {
        const { CategoriaId } = req.params;
        var limiteQuery = parseInt(req.query.limite);
        var paginaQuery = parseInt(req.query.pagina);

        let pagina = 1
        let limite = 10000

        if(!isNaN(paginaQuery)){
            pagina = paginaQuery;
        }

        if(!isNaN(limiteQuery)){
            limite = limiteQuery;
        }

        const listaDeProdutos = await Produtos.findAll({
            include: [{
                model: Categorias,
                where: {id: CategoriaId}}],
            limit: limite,
            offset:((pagina - 1) * limite)
            })

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


        await novoProduto.setCategorias(categoria);

        res.status(201).json(novoProduto);
    },    

    async deletarProduto(req, res) {
        try {
        const { id } = req.params;

            await CategoriaProduto.destroy({
                where: {
                    produtoId: id
                }
            });

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

        res.json(produtoAtualizado);
    },
};


module.exports = produtoController;