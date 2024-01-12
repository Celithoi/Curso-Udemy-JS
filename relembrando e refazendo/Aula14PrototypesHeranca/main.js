// // // new Object -> Object.prototype
// // const objA = {
// //     chaveA: 'A'
// //     //__proto__: Object.prototype
// // }
// // const objB = {
// //     chaveB: 'B'
// //     //__proto__: ObjA tem como fazer isso, o proto de B seria o Objeto A
// // };

// // Object.setPrototypeOf(objB,objA) // setter e tb tem o getter, mas evitar usar por que pode dar muito erro e é perigoso
// // console.log(objB.chaveA);
// // console.log(objA.__proto__ === Object.prototype);


// // para fixar o conhecimento

// function Produto(nome,preco){
//     this.nome = nome;
//     this.preco = preco;
// }

// Produto.prototype.desconto = function (percentual){
//     this.preco = this.preco - (this.preco*(percentual/100));
// };

// Produto.prototype.aumento = function (percentual){
//     this.preco = this.preco + (this.preco*(percentual/100));
// };

// const produto1 = new Produto('camiseta', 50);

// const produto2 ={
//     nome: 'caneca',
//     preco: 15    
// };
// Object.setPrototypeOf(produto2, Produto.prototype);

// produto2.aumento(10);

// //produto1.desconto(10);
// //produto1.aumento(20);

// const produto3 = Object.create(Produto.prototype,{
//     preco: {
//         writable: true,
//         configurable: true,
//         enumerable: true,
//         value: 99,
//     },
//     tamanho: { 
//         writable: true,
//         configurable: true,
//         enumerable: true,
//         value: 42,
//     },
// });

// console.log(produto1);
// console.log(produto2);
// console.log(produto3);
// produto3.aumento(10);
// console.log(produto3);


//           Herança


//Produto -> aumento e desconto
//Camisa vai ter cor exclusivo
//Caneca vai ter material esclusivo

// /////////  Construtor
function Produto(nome , preco){
    this.nome = nome;
    this.preco = preco;
}

// Funçoes do construtor

Produto.prototype.aumento = function(valor){
    this.preco += valor;
};

Produto.prototype.desconto = function(valor){
    this.preco -= valor
};

// camiseta herdando dados do construtor

function Camiseta(nome, preco, cor){
    Produto.call(this,nome,preco)
    this.cor = cor;
}

// pegando o prototyde de produto para usar em camiseta

Camiseta.prototype = Object.create(Produto.prototype);

// definindo o construtor da camiseta como camiseta

Camiseta.prototype.constructor = Camiseta;

// funcao especifica da Camiseta

Camiseta.prototype.aumento = function(valor){
    this.preco = this.preco + (this.preco *(valor/100));
}

// caneca herdando dados do construtor

function Caneca(nome, preco, material,estoque){
    Produto.call(this,nome,preco);
    this.material = material;
    
    Object.defineProperty(this,estoque, {
        enumerable: true,
        configurable: false,
        get: function(){return estoque},
        set: function(valor){
            if(typeof valor !== 'number' ) return;
            estoque = valor;
        },
    });
}

// caneca chamando o prototype da Produto.

Caneca.prototype = Object.create(Produto.prototype);

// definindo o construtor da caneca como camiseta

Caneca.prototype.constructor = Caneca;

// chamar as funcoes e introduzir dados

const produto = new Produto('GEN',111);
const camiseta = new Camiseta('regata',7.5,'preta');
const caneca = new Caneca('caneca', 13, 'Plástico', 5);

console.log(caneca);
console.log(camiseta);
console.log(produto);
