
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

// const promise = [
//     //'Primeiro Valor', 
//     esperaAi('Promise1', 3000),
//     esperaAi('Promise2', 500),
//     esperaAi('Promise3', 5000),
//     esperaAi('1000', 3000),
//     //'outro valor'
// ];

// passa por todas as promises e resolve

// Promise.all(promise).then(function (valor){
//     console.log(valor);
// }).catch(function (erro){
//     console.log(erro)
// });


// passa na mais rapida

// Promise.race(promise).then(function (valor){
//     console.log(valor);
// }).catch(function (erro){
//     console.log(erro)
// });

function baixaPagina() {
    const emCache = false;
    if(emCache){
        return Promise.resolve('pagina em cache')
    } else {
        return esperaAi('Pagina baixada', 3000)
    }
}

baixaPagina()
.then(dadosPagina =>
    { console.log(dadosPagina);})
.catch(e =>{console.log(e)});