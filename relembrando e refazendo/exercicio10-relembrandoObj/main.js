// // //aprendendo objetos

// // const pessoa = {
// //     nome: 'marcelo',
// //     sobrenome:'henrique'
// // }

// const pessoa = new Object();
// pessoa.nome = 'marcelo'
// pessoa.sobrenome = 'henrique'
// pessoa.idade = 38
// pessoa.falaNome = function(){
//     return(`${this.nome} está falando seu nome`)
// }
// pessoa.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// // console.log(pessoa.falaNome());
// // console.log(pessoa.getDataNascimento())

// // um for para saber todas as chaves do objeto

// for(let chave in pessoa){
//     console.log(chave);           // nome sobrenome idade falaNome getDataNascimento
//     //console.log(pessoa[chave]); // marcelo henrique 38 [Function (anonymous)][Function (anonymous)]
// };

// // factory functions // constructor functions // classes

// Factory

function criaPessoa(nome,sobrenome){
    return{
       nome: nome ,
       sobrenome: sobrenome,
       get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
       },
    };
}

const p1 = criaPessoa('marcelo','henrique')
console.log(p1.nomeCompleto);

// Constructor

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pin = new Pessoa('marcelo','henrique');

pin.nome = 'teste';
Object.freeze(pin); // bloqueia para n haver mudança no objeto
pin.sobrenome = 'jao'

console.log(pin)




