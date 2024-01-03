function Enviar(){

const entradas = document.querySelector('.entrada')
const saidas = document.querySelector('.saida')

const pessoas = [];

function Preencher(event){
    event.preventDefault();

    const nome = entradas.querySelector('.nome');
    const sobrenome = entradas.querySelector('.sobrenome');
    let peso = entradas.querySelector('.peso');
    let altura = entradas.querySelector('.altura');

    pessoas.push({

        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value

    })
    console.log(pessoas)
    saidas.innerHTML+= `Nome ${nome.value}, sobrenome ${sobrenome.value}, peso ${peso.value} altura ${altura.value}`

}

entradas.addEventListener('submit', Preencher)


};

Enviar();