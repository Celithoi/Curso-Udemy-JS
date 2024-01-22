const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

//escrevendo dados

// const pessoas = [
//     {nome: 'joão'},
//     {nome: 'maria'},
//     {nome: 'pedro'},
//     {nome: 'paulo'},
//     {nome: 'thiago'},
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

async function lerArquivo(caminho){
    //console.log(dados);
    const dados = await ler(caminho);
    renderizarDados(dados);
};

function renderizarDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
};


lerArquivo(caminhoArquivo);

