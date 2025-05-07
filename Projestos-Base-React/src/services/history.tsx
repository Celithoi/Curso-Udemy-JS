// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

// export default history;

// src/services/history.ts
import { createBrowserHistory } from 'history';

// Exportar como 'appHistory' pode evitar confusão com o tipo 'History'
export const appHistory = createBrowserHistory();
