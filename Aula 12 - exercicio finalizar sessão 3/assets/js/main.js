const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);       
    }

});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    //setar atributo no boão para poder mexer nele
    //adicionar classe ou id para poder manusear cada botão
    //botaoApagar.classList('apagar');
    //mas existe outra opção.
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','Apagar esta função')
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//função de apagar as tarefas

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        //console.log(el.parentElement);
        el.parentElement.remove();
        salvarTarefas();

    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listadeTarefas = [];
    
    for ( let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listadeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listadeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}

function adicionTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listadeTarefas = JSON.parse(tarefas);

    for(let tarefa of listadeTarefas){
        criaTarefa(tarefa);
    }
}

adicionTarefasSalvas();

