// definição de variaveis
function relogio(){

    const relogio = document.querySelector('.relogio')
// somente seria usado na versao com chamados independentes
// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')
let segundos = 0;
let timer;

// função pega segundos e organiza no time zone

function pegaSegundos(segundos){

    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
    hour12: false, timeZone: 'GMT'});

}

// função de começar a contar o contador

function iniciaRelogio(){
    timer = setInterval(function(){
    segundos ++ // poderia ser tambem segundos = segundos + 1    
    relogio.innerHTML = pegaSegundos(segundos)   
    }, 1000);
    
}

document.addEventListener('click',function(e){

    const el = e.target;
    
    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer)
        relogio.classList.add('pausado');
    }
    
    if(el.classList.contains('zerar')){
        clearInterval(timer);
        segundos = 0;
        relogio.classList.remove('pausado')
        relogio.innerHTML = '00:00:00'
    }

    
});

// podemos pegar todos os eventos um por um ou fazer um evento generico

// iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer)
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function(event){
//     clearInterval(timer)
//     relogio.classList.add('pausado');
// });

// zerar.addEventListener('click', function(event){
//     clearInterval(timer)
//     segundos = 0;
//     relogio.classList.remove('pausado')
//     relogio.innerHTML = '00:00:00'
//});

}

relogio();
