//retornar o maior valor entre dois numeros usando uma função

function maior(x,y){

    // primeira opção
    // if (x > y){
    //     return x;
    // }else
    // return y;

    // refatorando o codigo;
    
    // if( x > y) return x;
    // return y

    // segunda opção

    return x > y ? x: y;
    
}

    // terceira opção arrow function

    // const max = (x,y) =>{ return x > y ? x : y;}

const max = (x,y) => x > y ? x : y; 

    // arrow function otimizada

console.log(max(100,20));
console.log(maior(10,2))