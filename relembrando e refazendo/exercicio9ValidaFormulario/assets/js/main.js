class ValidaFormulario{
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }
    // controlar evento de submit
    // so enviar quando estiver tudo correto
    eventos() {
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }
    // para lidar com o submit
    // valida os campos
    // valida as senhas
    // se as senhas e os campos todos estiverem corretos
    // o form pode ser enviado
    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        if(camposValidos && senhasValidas){
            alert('formulario enviado');
            this.formulario.submit();
        }
    }
    // faz a verificação de de nome e sobrenome e cpf
    // aqui chama a função de validar
    // verifica se os campos estão em branco
    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            if (!campo.value){
                this.criaErro(campo,`campo "${label}" não pode estar em branco`)
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;

                
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }
    // faz validação de todas as senhas
    senhasSaoValidas(){
      let valid = true;
      
      const senha = this.formulario.querySelector('.senha');
      const repetirSenhar = this.formulario.querySelector('.repetir-senha');

      if(senha.value !== repetirSenhar.value){
        valid = false;
        this.criaErro(senha,"Campos senha e repetir senha precisam ser iguais");
        this.criaErro(repetirSenhar,"Campos senha e repetir senha precisam ser iguais");
      };

       if(senha.value.length < 6 || senha.value.length > 12){
        valid = false;
        this.criaErro(senha,"senha precisa estar entre 6 e 12 caracteres");
       };
      return valid;
    }
    // valida o campo usuario
    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'nome de usuário precisa conter apenas letras e ou numeros');
            valid = false;
        }

        return valid;
    }
     
    // valida o campo CPF
    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.criaErro(campo, "CPF invalido");
            return false;
        }
        return true;
    }
    // caso encontre algum erro, aqui geramos o erro e colamos na tela
    criaErro(campo,msg){
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend',div);
    }
}



const valida = new ValidaFormulario();