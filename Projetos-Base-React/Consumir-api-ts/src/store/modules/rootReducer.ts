import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/reducer';

const rootReducer = combineReducers({
  auth: auth,
  // auth: authReducer,
  // products: productsReducer,
  // Adicione outras chaves e reducers aqui conforme necessário
});

export type RootState = ReturnType<typeof rootReducer>; // Opcional, mas útil para tipar fora do store.ts
export default rootReducer;
