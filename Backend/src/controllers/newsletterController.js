const { Newsletters } = require('../models');

const newsletterController = {
    listarNewsletters: async (req, res) => {

        const listaDeNewsletters = await Newsletters.findAll();

        res.json(listaDeNewsletters);
    },
   
    async cadastrarNewsletter(req, res) {
        try {
            const { nome, email } = req.body;

            const novoNewsletter = await Newsletters.create({
                nome,
                email,
            });

            res.status(201).json(novoNewsletter);
        } catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    },
   
};


module.exports = newsletterController;