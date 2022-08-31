function criaCalculadora (){
  return {
    display: document.querySelector(`.display`),

    inicia(){
      this.display.focus();
      this.pegaBotao();
      this.pegaEnter();
    },

    fazCalculo(){
      let conta = this.display.value;
      try{
        conta = eval(conta);
        console.log(conta);
        if(!conta){
          alert('conta inválida!')
          return;
        }
        this.display.value = String(conta);
      }catch (e){
        alert('conta inválida!');
        return;
      }
    },
    
    pegaBotao(){
      document.addEventListener(`click` , e => {
          const elemento = e.target;

          if (elemento.classList.contains(`btn-num`)){
            let texto = elemento.innerText;
            this.display.value += texto ;
          }

          if (elemento.classList.contains(`btn-clear`)){
            this.display.value = ``;
          }

          if (elemento.classList.contains(`btn-del`)){
            this.display.value = this.display.value.slice(0,-1);
          }
          if (elemento.classList.contains(`btn-eq`)){
            this.fazCalculo();
          }
          this.display.focus();
      });
    },

    pegaEnter(){
      this.display.addEventListener('keypress', e =>{
        if (e.keyCode === 13){
          this.fazCalculo();
        }
      });
    },

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();