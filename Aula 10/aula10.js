function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}


// as duas funcionan da mesma fora, tanto usar uma função anonima
// ou uma variavel
//   #########   
//função anonima
//   #########   
//setInterval(function () {console.log(mostraHora())},1000);
//   #########   
// variavel
//   #########   
const timer = setInterval(function () {console.log(mostraHora())},1000);

setTimeout(function(){clearInterval(timer);},3000)

setTimeout(function(){
    console.log('Olá Mundo!')
},5000);