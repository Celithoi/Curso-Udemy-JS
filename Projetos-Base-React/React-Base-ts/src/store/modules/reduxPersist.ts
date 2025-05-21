import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { Reducer, UnknownAction } from 'redux';
import { RootState } from './rootReducer';

// Aqui é a linha 4 do seu arquivo, onde o erro acontece
export default (reducers: Reducer<RootState, UnknownAction>) => {
  // <--- CORREÇÃO: Adicionamos o tipo aqui
  // Supondo que você já corrigiu o conflito de nomes como discutimos antes:
  const persistedReducers: Reducer<RootState & PersistPartial, UnknownAction> =
    persistReducer(
      // Usamos a FUNÇÃO persistReducer importada
      {
        key: 'REACT-BASE',
        storage,
        whitelist: ['example'], // Se whitelist for vazio, e não houver blacklist, todos os reducers são persistidos.
        // Se quiser persistir APENAS alguns, coloque os nomes deles aqui, ex: ['auth', 'user']
      },
      reducers // Passamos o parâmetro 'reducers' (que agora está tipado)
    );

  // Lembre-se de retornar o reducer persistido se for usá-lo para criar a store
  // return persistedCombinedReducers;
  return persistedReducers;
};
