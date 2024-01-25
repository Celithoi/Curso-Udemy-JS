const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')
// passando pelo middleware
// se não chamar next a requisição fica parada

// function meuMiddleware(req,res,next){
//     console.log();
//     console.log('passei no seu middleware');
//     console.log();
//     next();
// }


// Rotas de home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato

route.get('/contato', contatoController.paginaInicial)

module.exports = route;