const express = require('express');
const produtoController = require('../controllers/produtoController');
const categoriaController = require('../controllers/categoriaController');
const carroselController = require('../controllers/carroselController');
const avaliacaoController = require('../controllers/avaliacaoController');
const routes = express.Router();

// todos os endpoins de produtos
routes.get('/produtos', produtoController.listarProduto);
routes.post('/produtos', produtoController.cadastrarProduto);  
routes.delete('/produtos/:id', produtoController.deletarProduto);
routes.put('/produtos/:id', produtoController.atualizarProduto);

//listar produtos por nome
routes.get('/produtos/:nome', produtoController.listarProdutoPorNome);

//listar produtos por nome
routes.get('/produtos/categoria/:CategoriaId', produtoController.listarProdutoPorCategoria);

// todos os endpoins de categorias
routes.get('/categorias', categoriaController.listarCategorias);
routes.post('/categorias', categoriaController.cadastrarCategoria);

routes.get('/carrosel', carroselController.listarCarrosel);

routes.get('/avaliacao', avaliacaoController.listarAvaliacao);

routes.get('/avaliacao/produto/:ProdutoId', avaliacaoController.listarAvaliacaoPorProduto);


module.exports = routes;