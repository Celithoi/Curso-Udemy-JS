const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function recuperarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
recuperarTarefasSalvas();

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const arrayTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', "").trim();
        arrayTarefas.push(tarefaTexto);
        
    }
    // Salvando em JSON
    const tarefasJSON = JSON.stringify(arrayTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
    
};

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
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
    criaBotaoApagar(li);
    salvarTarefas();
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

document.addEventListener('click',function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});