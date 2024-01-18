//######################//######################//######################
//######################função para gerar numeros aleatorios############
//######################//######################//######################

function aleatorio(min = 0,max = 3){
    min *= 1000;
    max *= 1000
    return Math.floor(Math.random()* (max - min)+min)
}

//######################//######################//######################
//######função que usa numeros aleatorios para gerar tempo de espera####
//######################//######################//######################


function esperaAi(msg, tempo){
    return new Promise((resolve,reject) =>{
        if(typeof msg !== 'string'){
            reject('CAI no ERRO');
            return;
        }
        setTimeout(()=>{
            resolve(msg.toUpperCase() + ' - Passei na promise');
        },tempo);
    });
}

// começar realmente apartir daqui

// esperaAi('Fase1', aleatorio()).then(valor => {
//     console.log(valor)
//     return esperaAi('Fase2', aleatorio())
// }).then(valor =>{
//     console.log(valor)
//     return esperaAi('Fase3', aleatorio())
// }).then(valor =>{
//     console.log(valor)
//     return valor;
// }).then(fase => {
//     console.log('Terminamos na fase: ',fase);
// }).catch(e => console.log(e));

// vamos usar async e await.
// fazer a mesma coisa que foi feito acima;

async function executa(){
    try{
        
        const fase1 = await esperaAi('Fase1', aleatorio())
        console.log(fase1);
        
        const fase2 = await esperaAi('Fase2', aleatorio())
        console.log(fase2);
        
        const fase3 = await esperaAi('Fase3', aleatorio())
        console.log(fase3);
    
        console.log('Terminamos na fase: ',fase3);

    } catch(e){
        console.log(e);
    }
}

executa();

// se tirar o await a promise vai ficar pending
// pendind -> pendente 
// fullfilled -> resolvida
// rejected -> rejeitada,
