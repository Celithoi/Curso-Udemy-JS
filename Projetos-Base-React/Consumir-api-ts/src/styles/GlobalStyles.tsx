import { createGlobalStyle, styled } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

#root {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

  }

body{
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor};

}

html,body{
  width: 100%;
  height: 100%; /* Essencial para que #root possa usar height: 100% */
  overflow-x: hidden;

}

button{
  cursor: pointer;
  background: ${colors.primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;
}

button:hover{
  filter: brightness(75%)

}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul{
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background: ${colors.successColor};
  color: #fff;
}

/* Para esconder o ícone padrão dos toasts de erro */
body .Toastify .Toastify__toast-container .Toastify__toast--success .Toastify__toast-icon,
body .Toastify .Toastify__toast-container .Toastify__toast--success svg {
  display: none !important;
}

/* Para esconder o ícone padrão dos toasts de erro */
body .Toastify .Toastify__toast-container .Toastify__toast--success .Toastify__toast-icon,
body .Toastify .Toastify__toast-container .Toastify__toast--success svg {
  display: none !important;
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor}; /* Exemplo de cor de erro */
  color: #fff;
}

/* Para esconder o ícone padrão dos toasts de erro */
body .Toastify .Toastify__toast-container .Toastify__toast--error .Toastify__toast-icon,
body .Toastify .Toastify__toast-container .Toastify__toast--error svg {
  display: none !important;
}

/* Para mudar a cor da barra de progresso dos toasts de erro */
body .Toastify .Toastify__toast-container .Toastify__toast--error .Toastify__progress-bar {
  background: #fff !important;
}

`;

export const Container = styled.section`
  max-width: 700px;
  background: #fff;
  margin: 30px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.1);
`;
