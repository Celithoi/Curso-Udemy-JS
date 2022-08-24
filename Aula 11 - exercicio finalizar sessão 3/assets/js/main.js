function mostraHora(segundos){
    let date = new Date(segundos*1000);
    return date.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone: 'UTC'});
}

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = mostraHora(segundos);
    },1000);
    
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
var timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = mostraHora(segundos);
    },1000);
    
}

//###############################################################//
//################### tambem pode ser feito assim################//
//###############################################################//

//document.addEventListener('click',function(e){
    //const elemento = e.target;
    //if(elemento.classList.contains('zerar')){
    //    clearInterval(timer);
    //    relogio.innerHTML() = "00:00:00";
    //    relogio.classList.remoce.('pausado');
    //    segundos = 0;
    //}

    //const elemento = e.target;
    //if(elemento.classList.contains('iniciar')){
    //   relogio.classList.remove('pausado');
    //    clearInterval(timer);
    //    iniciarRelogio();        
    //}

    //const elemento = e.target;
    //if(elemento.classList.contains('pausar')){
    //    clearInterval(timer);
    //    relogio.classList.add('pausado');
    //}
//});

//###############################################################//
//################### tambem pode ser feito assim################//
//###############################################################//

iniciar.addEventListener('click' , function(event){
    // pega o evento click no botão iniciar
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
    
});

pausar.addEventListener('click' , function(event){
    // pega o evento click no botão pausar.
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click' , function(event){
    // pega o evento click do botao zerar.
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});

