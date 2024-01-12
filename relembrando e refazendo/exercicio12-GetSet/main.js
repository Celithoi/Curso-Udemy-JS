// defineProperty - DefineProperties -> getters e setters

function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a  chave
        configurable: true,  // pode apagar a chave?
        get: () => estoque,
        set: function(valor) {
            if (typeof valor !== 'number')
            console.log('bad value')
            estoque = valor
        } ,
    });

}

const produto1 = new Produto('camiseta',20,3);
// produto1.estoque = "ta limpo";
produto1.estoque = 500;
// console.log(produto1);
console.log(produto1.estoque)
// console.log(Object.keys(produto1));