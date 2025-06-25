// Tupla é um array de tamanho fixo e tipos fixos

const dadosCliente1: [number, string] = [1, 'Marcelo'];
const dadosCliente2: [number, string, string] = [1, 'Marcelo', 'Henrique'];
// quando colocamos readonly, não podemos alterar os valores do array
const dadosCliente3: readonly [number, string, string] = [
  1,
  'Marcelo',
  'Henrique',
];

dadosCliente1[0] = 100;
console.log(dadosCliente1); // 1
console.log(dadosCliente2); // 1
console.log(dadosCliente3); // 1
