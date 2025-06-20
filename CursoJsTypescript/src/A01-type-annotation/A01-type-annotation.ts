/*eslint-disable*/

// tipos basicos

let nome: string = 'marcelo';
let idade: number = 39;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer simbolo');
let big: bigint = 10n;

// Arrays

let arrayDeNumber: Array<Number> = [1, 2, 3];
// Ou
let arrayDeNumber2: Number[] = [1, 2, 3];

let ArrayDeString: Array<String> = ['', '', ''];
// Ou
let ArrayDeString2: String[] = ['', '', ''];

// Objeto

let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 39,
  nome: 'marcelo henrique',
  adulto: true,
};

// Funções

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
