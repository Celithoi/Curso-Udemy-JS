/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions.ts';
import * as types from '../types.ts';

const requisicao = (): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequestSaga() {
  try {
    console.log('Saga: Iniciando exampleRequestSaga...');
    yield call(requisicao); // Chama a função que retorna a Promise
    console.log(
      'Saga: Requisição bem-sucedida, despachando ClicaBotaoSuccess...'
    );
    // CORREÇÃO AQUI: Chame o action creator para obter o objeto da ação
    yield put(actions.ClicaBotaoSuccess());
  } catch (error) {
    console.error(
      'Saga: Erro na requisição, despachando ClicaBotaoFailure...',
      error
    );
    // CORREÇÃO AQUI: Chame o action creator
    // Você pode passar o erro como payload se seu action creator aceitar
    yield put(actions.ClicaBotaoFailure());
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequestSaga),
]);
