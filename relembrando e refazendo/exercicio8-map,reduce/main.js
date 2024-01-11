//MAP

const pessoas = [
    { nome: 'Luiz' , idade: 62 },
    { nome: 'Maria' , idade: 23 },
    { nome: 'Eduardo' , idade: 55 },
    { nome: 'Letícia' , idade: 19 },
    { nome: 'Rosana' , idade: 32 },
    { nome: 'Wallace' , idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome); 
const idades = pessoas.map(obj => obj.idade);
const objIds = pessoas.map((obj,indice)=> {
    const newObj = {...obj}; // copiar sem utilizar o spreed da erro
    newObj.id = indice
    return newObj
});

// console.log(nomes);
// console.log(idades);
// console.log(objIds);
// console.log(pessoas);

// Reduce

const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

// const total = numeros.reduce(function(acumulador, valor, indice, array){
//     acumulador += valor;
//     return acumulador;
// }, 0); // esse 0 é o valor inicial, é opcional

// console.log(total);

//fazendo os exercicios com reduce

// const total = numeros.reduce(function(acumulador, valor){
//     if(valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);

// console.log(total);

//retorno a soma total dos valors - reduce
//retorne um array com os valores pares - filter
//retorne um array com o dobro dos valores - map

const numerosPares = numeros
.filter(obj => obj % 2 === 0)
.map(obj => obj * 2)
.reduce((ac,obj) => ac += obj);
console.log(numerosPares)