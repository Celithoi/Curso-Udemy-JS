/* eslint-disable @typescript-eslint/no-unused-vars */
import { get } from 'lodash';
import { call, put, all, takeLatest, Effect } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions.ts';
import * as types from '../types.ts';
import { Action } from 'redux';
import axios from '../../../services/axios.ts';
import { AxiosResponse } from 'axios';
import { appHistory } from '../../../services/history.ts';
import { RootState } from '../rootReducer';

interface LoginCredentials {
  email: string;
  password: string;
  prevPath: string;
}

interface LoginAction extends Action {
  type: typeof types.LOGIN_REQUEST;
  payload: LoginCredentials;
}

// 3. Estrutura do 'data' na resposta da API /tokens (SÓ O QUE A API RETORNA)
interface TokenResponseData {
  // Renomeei para clareza, é o que a API retorna
  token: string;
  // Adicione outros campos se a API /tokens retornar mais algo útil
  // Ex: expires_in?: number;
}

interface PersistRehydrateAction extends Action {
  type: typeof types.PERSIST_REHYDRATE; // Ou 'persist/REHYDRATE' se você usar a string literal
  payload?: RootState;
}

function* loginRequest(
  action: LoginAction
): Generator<Effect, void, AxiosResponse<TokenResponseData>> {
  try {
    const { email, password, prevPath } = action.payload;
    const apiPayload = { email, password };
    const response: AxiosResponse<TokenResponseData> = yield call(
      axios.post,
      '/tokens',
      apiPayload
    );
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Logado com Sucesso');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    appHistory.push(prevPath);
  } catch (e) {
    toast.error('Usuário ou senha inválidos.');
    yield put(actions.loginFailure());
  }
}

function* persistRehydrateSaga(action: PersistRehydrateAction): Generator {
  const token = get(action.payload, 'auth.token', '');
  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }
  yield;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrateSaga),
]);
