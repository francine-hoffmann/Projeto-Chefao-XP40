const { Contatos } = require('../models');

const contatoController = {
    listarContatos: async (req, res) => {

        const listaDeContatos = await Contatos.findAll();

        res.json(listaDeContatos);
    },

    async cadastrarContato(req, res) {
        try {
            const { nome, email, telefone, mensagem } = req.body;

            const novoContato = await Contatos.create({
                nome,
                email,
                telefone,
                mensagem,
            });

            res.status(201).json(novoContato);
        } catch (error) {
            return res.status(500).json('Ocorreu algum problema' + error);
        }
    },

   
};


module.exports = contatoController;