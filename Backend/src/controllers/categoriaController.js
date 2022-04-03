const { Categorias} = require('../models');
const { Produtos} = require('../models');

const categoriaController = {
    listarCategorias: async (req, res) => {

        const listaDeCategorias = await Categorias.findAll(
            {
                include: Produtos
            }
        );

        res.json(listaDeCategorias);
    },
    listarCategoriaPorNome: async (req, res) => {
        const { nome } = req.params;
        console.log(nome)

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