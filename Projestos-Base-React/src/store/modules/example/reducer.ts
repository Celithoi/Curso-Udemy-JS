import { Action } from '@reduxjs/toolkit'; // Action ainda é útil aqui

// Interface específica para este "pedaço" do estado
export interface ExampleState {
  botaoClicado: boolean;
}

const initialState: ExampleState = {
  botaoClicado: false,
};

const exampleReducer = (
  state: ExampleState = initialState,
  action: Action
): ExampleState => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      console.log('estou ouvindo botão clicado no exampleReducer');
      return {
        ...state,
        botaoClicado: !state.botaoClicado,
      };
    }
    default: {
      return state;
    }
  }
};

export default exampleReducer;
