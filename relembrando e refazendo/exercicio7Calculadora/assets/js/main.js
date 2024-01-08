function Calculadora(){

  this.display = document.querySelector('.display');
  
  this.inicia = () => {
    this.capturaClique();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keypress', e =>{
      if(e.key === 'Enter'){
        this.realizaConta();
      }
      return;
    })
  };


  this.capturaClique = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };
  
  
  this.addNumDisplay = el => {
  this.display.value += el.innerText;
  this.display.focus();
  }
  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0,-1);
  this.realizaConta = () => {
    try{
      const conta = eval(this.display.value);

      if(!conta){
        alert(!conta)
        return;
      }
      this.display.value = conta;

    }
    catch(e){
      alert('conta invalida');
      return;
    }
  };
  

}

const calculadora = new Calculadora();
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