// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
//função construtora começa com letra maiuscula


//eu que fiz


// function validaCpf(sobra,cpfArray,contador){
//     let total = 0;
//     sobra.forEach(el => {
//     total += contador * el;
//     contador --;   
//     });
//     let test = 11 - (total %11);
//     //console.log(test)
//     if (test > 9) test = 0;
//     sobra.push(test.toString());
//     //console.log(sobra)
//     if(cpfArray.length > sobra.length) validaCpf(sobra,cpfArray,11);

//     return sobra;
    
// };

// let cpf = "705.484.450-52";
// let cpfLimpo = cpf.replace(/\D+/g,'');
// cpfArray = Array.from(cpfLimpo);
// let sobra = cpfArray.slice(0,cpfArray.length - 2);
// // console.log(sobra);
// // console.log(cpfArray);

// let retorno = validaCpf(sobra,cpfArray,10);
// retorno = retorno.join('');
// if (retorno === cpfLimpo){
//     console.log('oi')
// }


function ValidaCpf(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g,'');
        },
    });
}
ValidaCpf.prototype.valida = function(){
   if(typeof this.cpfLimpo === 'undefined') return false;
   if(this.cpfLimpo.length !== 11) return false;
   if(this.isSequencia()) return false;
   
   const cpfParcial = this.cpfLimpo.slice(0,-2);
   const digit1 = this.criaDigito(cpfParcial);
   const digit2 = this.criaDigito(cpfParcial+digit1);
   
   const novoCPF= cpfParcial+digit1+digit2;
   
   return novoCPF === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length+1;
    const total = cpfArray.reduce((ac,val)=>{
        ac+=(regressivo*Number(val))
        regressivo--;
        return ac;

    },0);

    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCpf.prototype.isSequencia = function (){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}; 

const cpf = new ValidaCpf('705.484.450-52')


if(cpf.valida()){
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}

