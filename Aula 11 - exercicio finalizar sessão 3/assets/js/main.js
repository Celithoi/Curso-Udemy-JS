const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click' , function(event){
    let iniciar = setInterval();
    
});

pausar.addEventListener('click' , function(event){
    // pega o evento click no botão pausar.
});

zerar.addEventListener('click' , function(event){
    // pega o evento click do botao zerar.
});

function mostraHora(){
    let date = new Date();
    return date.toLocaleTimeString('pt-BR',{hour12:false,hour:'2-digit',minute:'2-digit',second:'2-digit'})
}