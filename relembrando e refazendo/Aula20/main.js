
function aleatorio(min,max){
    min *= 1000;
    max *= 1000
    return Math.floor(Math.random()* (max - min)+min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve,reject) =>{
        if(typeof msg !== 'string'){
            reject(false);
            return;
        }
        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' - Passei na promise');
        },tempo);
    });
}

//
// promise.all promise.race promise.resolve promise.reject
//

const promise = [
    //'Primeiro Valor', 
    esperaAi('Promise1', 3000),
    esperaAi('Promise2', 500),
    esperaAi('Promise3', 5000),
    esperaAi('1000', 3000),
    //'outro valor'
];

// Promise.all(promise).then(function (valor){
//     console.log(valor);
// }).catch(function (erro){
//     console.log(erro)
// });

Promise.race(promise).then(function (valor){
    console.log(valor);
}).catch(function (erro){
    console.log(erro)
});

