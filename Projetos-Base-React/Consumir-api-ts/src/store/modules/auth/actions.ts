/* eslint-disable @typescript-eslint/no-explicit-any */
import * as types from '../types';

export function loginRequest(payload: any) {
  return {
    type: types.LOGIN_REQUEST,
    payload: payload,
  };
}

export function loginSuccess(payload: any) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: payload,
  };
}

export function loginFailure(payload?: any) {
  // O '?' torna o parâmetro opcional
  return {
    type: types.LOGIN_FAILURE,
    payload: payload, // Adiciona o erro ao payload
  };
}
