const express = require('express');
const produtoController = require('../controllers/produtoController');
const categoriaController = require('../controllers/categoriaController');
const carroselController = require('../controllers/carroselController');
const avaliacaoController = require('../controllers/avaliacaoController');
const newsletterController = require('../controllers/newsletterController');
const contatoController = require('../controllers/contatoController');

const routes = express.Router();

routes.get('/produtos', produtoController.listarProduto);
routes.post('/produtos', produtoController.cadastrarProduto);  
routes.delete('/produtos/:id', produtoController.deletarProduto);
routes.put('/produtos/:id', produtoController.atualizarProduto);
routes.get('/produtos/:id', produtoController.listarProdutoPorId);
routes.get('/produtos/categoria/:CategoriaId', produtoController.listarProdutoPorCategoria);

routes.get('/categorias', categoriaController.listarCategorias);
routes.post('/categorias', categoriaController.cadastrarCategoria);

routes.get('/carrosel', carroselController.listarCarrosel);
routes.post('/carrosel', carroselController.cadastrarCarrosel);

routes.get('/avaliacao', avaliacaoController.listarAvaliacao);
routes.get('/avaliacao/produto/:ProdutoId', avaliacaoController.listarAvaliacaoPorProduto);
routes.post('/avaliacao', avaliacaoController.cadastrarAvaliacao);

routes.get('/newsletters', newsletterController.listarNewsletters);
routes.post('/newsletters', newsletterController.cadastrarNewsletter);

routes.get('/contatos', contatoController.listarContatos);
routes.post('/contatos', contatoController.cadastrarContato);

module.exports = routes;