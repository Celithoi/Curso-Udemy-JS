import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { Reducer, UnknownAction } from 'redux';
import { RootState } from './rootReducer';

export default (reducers: Reducer<RootState, UnknownAction>) => {
  const persistedReducers: Reducer<RootState & PersistPartial, UnknownAction> =
    persistReducer(
      {
        key: 'CONSUMO-API',
        storage,
        whitelist: ['auth'],
      },
      reducers
    );

  return persistedReducers;
};
