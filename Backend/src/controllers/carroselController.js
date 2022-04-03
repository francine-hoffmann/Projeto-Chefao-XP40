const { Carrosel } = require('../models');

const carroselController = {
    listarCarrosel: async (req, res) => {

        const listaDeCarrosel = await Carrosel.findAll();

        res.json(listaDeCarrosel);
           
    },

    async cadastrarCarrosel(req, res) {
        const { link_imagem } = req.body;

        const novoCarrosel = await Carrosel.create({
            link_imagem,
        });

        res.status(201).json(novoCarrosel);
    },  

};

module.exports = carroselController;