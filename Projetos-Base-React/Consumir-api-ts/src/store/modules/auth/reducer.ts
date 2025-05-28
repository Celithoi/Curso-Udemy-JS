import { Action } from '@reduxjs/toolkit'; // Action ainda é útil aqui
import * as types from '../types';

interface LoginSuccessPayload {
  token: string;
  user: object;
}

interface LoginRequestPayload {
  email: string;
  password: string;
  prevPath: string;
}

interface LoginSuccessAction extends Action {
  type: typeof types.LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
}
interface LoginFailureAction extends Action {
  type: typeof types.LOGIN_FAILURE;
  // Esta ação não parece ter payload no seu saga
}

interface LoginRequestAction extends Action {
  type: typeof types.LOGIN_REQUEST;
  payload: LoginRequestPayload; // Se você quiser acessar o payload no reducer
}

// Interface específica para este "pedaço" do estado
export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: object;
  isLoading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  user: {},
  isLoading: false,
};

type AuthAction = LoginSuccessAction | LoginFailureAction | LoginRequestAction;

const exampleReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...state };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default exampleReducer;
