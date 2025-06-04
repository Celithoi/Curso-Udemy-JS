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

interface RegisterRequestSagaPayload {
  id?: string | number;
  nome: string;
  email: string;
  password?: string;
}

// Defina a interface para a AÇÃO completa que a saga registerRequest espera
interface RegisterRequestAction extends Action {
  type: typeof types.REGISTER_REQUEST; // O tipo da ação
  payload: RegisterRequestSagaPayload; // O payload com a estrutura correta
}

function* registerRequest(action: RegisterRequestAction) {
  const { id, nome, email, password } = action.payload;
  try {
    if (id) {
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso');
      yield put(actions.registerSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        email,
        nome,
        password: password,
      });
      toast.success('Conta Criada com Sucesso!');
      yield put(actions.registerSuccess({ nome, email, password }));
      appHistory.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.error', []);
    //const status = get(e, 'response.status', 0);

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrateSaga),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
