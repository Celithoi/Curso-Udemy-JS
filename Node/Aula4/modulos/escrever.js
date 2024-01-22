const fs = require('fs').promises;

module.exports = (caminhos, dados) => {
    fs.writeFile(caminhos, dados ,{flag: 'w'});
    //fs.writeFile(caminhoArquivo, 'Frase1 \n', {flag:'w', encoding: 'utf8'}); // padrão é utf8
    // a FLAG: 'W' apaga tudo no arquivo antes de enviar o texto
    // a flag: 'a' coloca o texto no final do que ja tem
}

