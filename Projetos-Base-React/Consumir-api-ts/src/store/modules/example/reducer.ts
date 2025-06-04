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
      return {
        ...state,
        botaoClicado: !state.botaoClicado,
      };
    }

    case types.BOTAO_CLICADO_FAILURE: {
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export default exampleReducer;
