"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function semRetorno(...args) {
    console.log(args.join(' '));
}
const pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Henrique',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};
semRetorno('Marcelo', 'Cardoso');
pessoa.exibirNome();
// Declaração de tipagem retorno e ou metoro
