// const request = obj =>{
//     return new Promise((resolve,reject) =>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true); // true =assincrono  ou false = sincrono
//         xhr.send();  //enviar dados
//         xhr.addEventListener('load', () =>{
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });
// };

// carrega pagina como fetch API

// function carregaPagina(el){
//     const href = el.getAttribute('href');
    
    
//     fetch(href).then(response => {
//         if(response.status !== 200) throw new Error('Error 404');
//         return response.text()
//     })
//     .then(html => carregaResultado(html))
//     .catch(e => console.log(e));
           
// }

// carrega pagina com await fetch API

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error ('ERRO 404');

        const html = await response.text();
        carregaResultado(html);
    }catch(e){
        console.log(e);
    }

}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};

document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});


fetch('pagina1.html').then(resposta =>{
    if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    
}).then(html =>{
    console.log(html)
})
.catch(e => console.log(e)) // console.warn ou console.error