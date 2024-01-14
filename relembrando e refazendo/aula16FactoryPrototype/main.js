// function criaPessoa(nome, sobrenome){
//     const pessoaPrototype ={

//         falar() {console.log(`${this.nome} está falando`)},

//         beber(){console.log(`${this.nome} está bebendo`)},

//         comer(){console.log(`${this.nome} está comendo`)},

//     };

//     return Object.create(pessoaPrototype,{
//         nome: {value:nome},
//         sobrenome:{value:sobrenome}
//     });

// }

// outro modo de fazer

const comer = {
    comer(){console.log(`${this.nome} está comendo`);},
};

const beber = {
    beber(){console.log(`${this.nome} está bebendo`);},
};

const falar = {
    falar(){console.log(`${this.nome} está falando`);},
};

// ou const pessoaPrototype = Object.assign({},comer,falar,beber);
const pessoaPrototype = {...falar,...comer, ...beber}; 


function criaPessoa(nome,sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const pessoa1 = criaPessoa('marcelo','henrique');
const pessoa2 = criaPessoa('Lais',"Ribeiro")

pessoa1.falar()
pessoa2.beber()