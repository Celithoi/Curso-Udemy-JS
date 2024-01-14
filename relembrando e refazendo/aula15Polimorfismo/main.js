// herança e polimorfismo

function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.sacar = function (valor){
    if(valor <= this.saldo){
        this.saldo -= valor;
        this.verSaldo();
    }else console.log(`você tentou sacar ${valor} saldo insuficiente em conta, seu saldo atual é de ${this.saldo} reais`)        
};

Conta.prototype.verSaldo = function (){
    console.log(`a ${this.conta}, da agencia ${this.agencia} possui R$ ${this.saldo}`);            
}

function CC(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype); 
// estou criando um objeto e linkando ao prototype de conta e passando o valor por referencia para o 
// prototype de CC

CC.prototype.constructor = CC;

// aqui estou dizendo que o contrutor de CC não é Conta e sim o proprio CC

// funções exclusivas de CC

CC.prototype.sacar = function(valor){
    if ((this.saldo+this.limite) >= valor){
        this.saldo -= valor;
        this.verSaldo();
    }else console.log(`você tentou sacar ${valor} saldo insuficiente em conta, seu saldo atual é de ${this.saldo} reais`);

}


function CP(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


const conta1 = new Conta(11,22,33);
const cc1 = new CC(11,22,0,100);
const cp1 = new CP(12,33,0);

cc1.depositar(10);
cc1.sacar(110);
cc1.sacar(1);
console.log();
console.log();
cp1.depositar(10);
cp1.sacar(110);
cp1.sacar(1);
