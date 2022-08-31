function criaCalculadora (){
  return {
    display: document.querySelector(`.display`),

    inicia(){
      this.pegaBotao();
      //this.pegaEnter();
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
            
          }
      });
    },

  };
}

const calculadora = criaCalculadora();
calculadora.inicia();