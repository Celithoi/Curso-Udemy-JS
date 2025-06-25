//intersection types
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Intersecao = AB & AC & AD; // 'A'

const pessoa: Pessoa = {
  nome: 'Marcelo',
  sobrenome: 'Henrique',
  idade: 40,
};

console.log(pessoa);
export { pessoa };
