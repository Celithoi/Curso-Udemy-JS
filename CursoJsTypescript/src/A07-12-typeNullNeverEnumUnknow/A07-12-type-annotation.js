"use strict";
// Type null and undefined
// tipo never
// tipo enum uknown union literals
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorPreferida = setCorPreferida;
const pessoa = {
    idade: 40,
    nome: 'Marcelo',
    salario: 100000,
};
function setCorPreferida(pessoa, cor) {
    return { ...pessoa, corPreferida: cor };
}
console.log(setCorPreferida(pessoa, 'blue'));
console.log(pessoa);
