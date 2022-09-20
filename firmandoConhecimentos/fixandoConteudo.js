function rand(min,max){
//transfaromar milisegundos em segundos
    min *= 1000;
    max *= 1000;
//escolher tempo aleatório variando entre min e max
    return Math.floor(Math.random() * (max - min) + min);

}

function esperaAi (msg,tempo){

    return new Promise((resolve, reject) => {
        if(typeof msg != 'String') reject('BAD VALUE');
        
        setTimeout(() => {
        resolve(msg);
        },tempo);        
    });

}

esperaAi('Conexão com o BD',rand(1,3))
.then(resposta =>{
    console.log(resposta);
    return esperaAi('Buscando dados da BASE',rand(1,3));
})
.then(resposta =>{
    console.log(resposta);
    return esperaAi('Tratando os dados da BASE', rand(1,3));
})
.then(resposta =>{
    console.log(resposta);
})
.then(() =>{
    console.log('Exibir dados')
})
.catch(e =>{
    console.log('ERRO:', e);
});
// esperaAi('oi 2',rand(1,3));
// esperaAi('oi 3',rand(1,3));