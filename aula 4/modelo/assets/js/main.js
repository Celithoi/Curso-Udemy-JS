
const elementos = [
    {tag: 'div', texto: 'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto:'frase 4'},
]
// primeiro pega o local a ser trabalhado
const container = document.querySelector('.container');
// criar uma div dentro da variavel div 
//(não foi colocada em lugar nenhum)
const div = document.createElement('div');
// for para adicionar os elementos um a um
//dentro do sistema

for(let i = 0; i < elementos.length ; i++)
{

    // pega os elementos unitarios da array
    //e separa em 2 variaveis
    let { tag, texto } = elementos[i];
    // cria um elemento em P do tipo que está
    //descrito em tag 
    let p = document.createElement(tag); 
    // cria o texto e coloca em uma variavel
    let textoNode = document.createTextNode(texto); 
    // ou
    // p.innerHTML(texto);
    //ou
    //p.innerText(texto);
    // coloca dentro do elemento p do tipo tag, um texto
    p.appendChild(textoNode);
    // cria um elemento p com o texto dentro da div.
    div.appendChild(p);
    
}

// coloca a div com todos os elementos criados no 
//for dentro da div que está dentro da section
container.appendChild(div);