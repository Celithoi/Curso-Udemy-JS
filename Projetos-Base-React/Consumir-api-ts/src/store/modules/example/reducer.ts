import { Action } from '@reduxjs/toolkit'; // Action ainda é útil aqui
import * as types from '../types';

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
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      return {
        ...state,
        botaoClicado: !state.botaoClicado,
      };
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('estou fazendo uma requisição');
      return state;
    }

    default: {
      return state;
    }
  }
};

export default exampleReducer;
