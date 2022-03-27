const { Carrosel } = require('../models');

const carroselController = {
    listarCarrosel: async (req, res) => {

        const listaDeCarrosel = await Carrosel.findAll();

        res.json(listaDeCarrosel);
           
    }
};

module.exports = carroselController;