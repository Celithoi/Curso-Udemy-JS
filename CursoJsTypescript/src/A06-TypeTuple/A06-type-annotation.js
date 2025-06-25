"use strict";
// Tupla é um array de tamanho fixo e tipos fixos
Object.defineProperty(exports, "__esModule", { value: true });
const dadosCliente1 = [1, 'Marcelo'];
const dadosCliente2 = [1, 'Marcelo', 'Henrique'];
// quando colocamos readonly, não podemos alterar os valores do array
const dadosCliente3 = [
    1,
    'Marcelo',
    'Henrique',
];
dadosCliente1[0] = 100;
console.log(dadosCliente1); // 1
console.log(dadosCliente2); // 1
console.log(dadosCliente3); // 1
