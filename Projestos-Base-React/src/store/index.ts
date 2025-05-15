import { configureStore, Action } from '@reduxjs/toolkit'; // Action é um tipo genérico para ações

interface AppState {
  botaoClicado: boolean; // Propriedade opcional de exemplo
}

const initialState: AppState = {
  botaoClicado: false,
};

const rootReducer = (
  state: AppState = initialState,
  action: Action
): AppState => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      console.log('estou ouvindo botão clicado');
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
