function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Marcelo',
  sobrenome: 'Henrique',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Marcelo', 'Cardoso');
pessoa.exibirNome();

// Declaração de tipagem retorno e ou metoro
