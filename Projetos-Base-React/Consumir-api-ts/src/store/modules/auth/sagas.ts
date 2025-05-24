/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions.ts';
import * as types from '../types.ts';
import { Action } from 'redux';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginRequestSagaAction extends Action {
  type: typeof types.LOGIN_REQUEST;
  payload: LoginCredentials;
}

function* loginRequestSaga(action: LoginRequestSagaAction) {
  // ANTES: function loginRequestSaga(payload: LoginCredentials)
  const { email, password } = action.payload; // ANTES: const { email, password } = payload;
  console.log('Saga recebeu para login:', email, password); // Adicionei um log mais descritivo
  // Adicione sua lógica de saga aqui usando 'yield call', 'yield put', etc.
  // Por enquanto, um yield simples para satisfazer o TS e a natureza da geradora:
  yield; // REMOVA OU SUBSTITUA ISSO pela sua lógica de saga real (ex: yield call(...))
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequestSaga)]);
