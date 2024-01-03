const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = createElement('button')
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
}

function limpaImput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaImput();
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        //verificação se há dados de entrada, caso negativo sai da função
        if(!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
    }
})

btnTarefa.addEventListener('click',function(){
    //verificação se há dados de entrada, caso negativo sai da função
    if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
});