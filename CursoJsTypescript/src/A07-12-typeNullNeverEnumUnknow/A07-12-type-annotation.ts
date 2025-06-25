// Type null and undefined
// tipo never
// tipo enum uknown union literals

// type alias

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRgb = 'red' | 'green' | 'blue';
type CorCMYK = 'cyan' | 'magenta' | 'yellow' | 'black';
type CorPreferida = CorRgb | CorCMYK;

const pessoa: Pessoa = {
  idade: 40,
  nome: 'Marcelo',
  salario: 100_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'blue'));
console.log(pessoa);
