import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions.ts';
import * as types from '../types.ts';

const requisicao = (): Promise<void> =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequestSaga() {
  try {
    yield call(requisicao); // Chama a função que retorna a Promise
    yield put(actions.ClicaBotaoSuccess());
  } catch (error) {
    console.error(
      'Saga: Erro na requisição, despachando ClicaBotaoFailure...',
      error
    );
    toast.error('Deu ruin');
    // CORREÇÃO AQUI: Chame o action creator
    // Você pode passar o erro como payload se seu action creator aceitar
    yield put(actions.ClicaBotaoFailure());
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequestSaga),
]);
