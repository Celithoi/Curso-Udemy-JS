// defineProperty - DefineProperties

function Produto(nome,preco,estoque){
    // this.nome = nome;
    // this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a  chave
        value: estoque,  // valor 
        writable: false,    // pode editar os dados da chave?
        configurable: true,  // pode apagar a chave?
    });

    Object.defineProperties(this,{
        nome:{
            enumerable: true,  // mostra a  chave
            value: nome,  // valor 
            writable: true,    // pode editar os dados da chave?
            configurable: true,  // pode apagar a chave?
        },
        preco:{
            enumerable: true,  // mostra a  chave
            value: preco,  // valor 
            writable: true,    // pode editar os dados da chave?
            configurable: true,  // pode apagar a chave?
        },
    });
}

const produto1 = new Produto('camiseta',20,3);
console.log(produto1);
console.log(Object.keys(produto1));