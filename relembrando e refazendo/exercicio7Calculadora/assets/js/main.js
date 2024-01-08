function criaCalturadora(){
  return{ 
    display: document.querySelector('.display'),
    
    inicia(){
      this.cliqueBotoes();
      this.enter();
    },

    fazerConta(){
      let conta = this.display.value;

      try {
        
        conta = eval(conta);

        if(!conta) {
          alert('conta invalida');
          return;
        }

        this.display.value = conta;
      } catch (e){
        alert('conta invalida');
        return;
      }
        
    },

    cliqueBotoes(){
      document.addEventListener('click', e=>{
        const el = e.target; // this aqui está apontando para o document acima
        // usanemos o .bind para ignorar o this do document e referenciar a quem está chamando que é
        // a CALCULADORA
        // podemos colocar tb uma arrow function pois ela não interfere no THIS
        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerHTML);
        }
        if(el.classList.contains('btn-clear')){
          this.display.value = ''; 
        }
        if(el.classList.contains('btn-del')){
          this.display.value = this.display.value.slice(0,-1);
        }
        if(el.classList.contains('btn-eq')){
          this.fazerConta();
        }

        this.display.focus();

      });
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    },

    enter(){
      this.display.addEventListener('keypress', e=>{
          if (e.key === 'Enter'){
            
            this.fazerConta();
          }
      });
    },

  };
}

const calculadora = criaCalturadora();
calculadora.inicia();














// function criaCalculadora (){
//   return {
//     display: document.querySelector(`.display`),

//     inicia(){
//       this.display.focus();
//       this.pegaBotao();
//       this.pegaEnter();
//     },

//     fazCalculo(){
//       let conta = this.display.value;
//       try{
//         conta = eval(conta);
//         console.log(conta);
//         if(!conta){
//           alert('conta inválida!')
//           return;
//         }
//         this.display.value = String(conta);
//       }catch (e){
//         alert('conta inválida!');
//         return;
//       }
//     },
    
//     pegaBotao(){
//       document.addEventListener(`click` , e => {
//           const elemento = e.target;

//           if (elemento.classList.contains(`btn-num`)){
//             let texto = elemento.innerText;
//             this.display.value += texto ;
//           }

//           if (elemento.classList.contains(`btn-clear`)){
//             this.display.value = ``;
//           }

//           if (elemento.classList.contains(`btn-del`)){
//             this.display.value = this.display.value.slice(0,-1);
//           }
//           if (elemento.classList.contains(`btn-eq`)){
//             this.fazCalculo();
//           }
//           this.display.focus();
//       });
//     },

//     pegaEnter(){
//       this.display.addEventListener('keypress', e =>{
//         if (e.keyCode === 13){
//           this.fazCalculo();
//         }
//       });
//     },

//   };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();