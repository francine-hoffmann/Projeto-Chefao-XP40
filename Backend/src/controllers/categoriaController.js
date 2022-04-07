const { Categorias} = require('../models');
const { Produtos} = require('../models');

const categoriaController = {
    listarCategorias: async (req, res) => {
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

        const listaDeCategorias = await Categorias.findAll(
            {
                include: Produtos, 
                limit: limite,
                offset: ((pagina - 1) * limite)
            });

        res.json(listaDeCategorias);
    },
    listarCategoriaPorNome: async (req, res) => {
        const { nome } = req.params;

        const listaDeCategorias = await Categorias.findOne({
            where: {
               nome: nome
            }})

        res.json(listaDeCategorias);
    },


    async cadastrarCategoria(req, res) {
        try {
            const { nome, link_imagem } = req.body;

            const novoCategoria = await Categorias.create({
                nome,
                link_imagem,
            });

            res.status(201).json(novoCategoria);
        } catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    },

   
};


module.exports = categoriaController;