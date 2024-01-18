// // aula explicativa

// function esperaAi(msg, tempo){
//     setTimeout(()=>{
//         console.log(msg)
//     },tempo);
// }

// function aleatorio(min,max){
//     min *= 1000;
//     max *= 1000
//     return Math.floor(Math.random()* (max - min)+min)
// }

// esperaAi('frase1',aleatorio(1,3))
// esperaAi('frase2',aleatorio(1,3))
// esperaAi('frase3',aleatorio(1,3))

// refazendo o codigo com promise

function esperaAi(msg, tempo){
    return new Promise((resolve,reject) =>{
        if(typeof msg !== 'string') reject(new Error());
        setTimeout(()=>{
            resolve(msg);
        },tempo);
    });
}


function aleatorio(min,max){
    min *= 1000;
    max *= 1000
    return Math.floor(Math.random()* (max - min)+min)
}


esperaAi('Conexão com o banco de dados', aleatorio(1,3))
.then(resposta =>{
    console.log(resposta);
    return esperaAi('procurando os dados solicitados',aleatorio(1,3)).then(resposta => {
        console.log(resposta)
        return esperaAi('tratando os dados da base',aleatorio(1,3)).then(resposta =>{
            console.log(resposta);
        }).then(() =>{
                console.log('exibe dados')
        })
    })
})
.catch(e =>{
    console.log('ERRO', e);
});

console.log('isso aqui sera exibido antes da promise')