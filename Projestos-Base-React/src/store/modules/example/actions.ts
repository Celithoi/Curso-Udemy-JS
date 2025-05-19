/* eslint-disable @typescript-eslint/no-explicit-any */
import * as types from '../types';

export function ClicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function ClicaBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function ClicaBotaoFailure(error?: any) {
  // O '?' torna o parâmetro opcional
  return {
    type: types.BOTAO_CLICADO_FAILURE,
    payload: error, // Adiciona o erro ao payload
  };
}
