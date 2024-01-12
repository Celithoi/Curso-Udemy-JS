/*
Object.values
Object.entries
Objetc.assign(des,any)
Object.getOwnPropertyDescription(o,'prop')
...(Spread)

ja vimos
Object.keys Retorna as chaves
Object.freeze Congela o objeto
Object.definyProperty Define uma propriedade
Object.definyProperties Define varias propriedades

*/

const produto = {nome: 'Produto', preco: 1.8};
// isso que ja sabemos
// const caneca = {...produto, material: "porcelana"};
// novidade

const caneca = Object.assign({},produto,{material:'porcelana'} );
caneca.nome = 'Outro nome';
caneca.preco = 2.5;

// console.log(produto);
// console.log(caneca);
// console.log(Object.keys(caneca));
Object.defineProperty(produto,'nome',{
    writable: true,
    enumerable: true,
});

console.log(Object.entries(produto));
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))