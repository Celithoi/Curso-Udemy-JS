const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
// Rotas de home
// rotas escolhe qual controler e controler escolhe qual model
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);
// Rotas de contato
route.get('/contato', contatoController.paginaInicial)
module.exports = route;