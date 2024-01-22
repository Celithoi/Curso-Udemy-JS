const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf8');


// module.exports = (caminhos, dados) => {
//     fs.writeFile(caminhos, dados ,{flag: 'w'});
// }