import { Action } from '@reduxjs/toolkit'; // Action ainda é útil aqui
import * as types from '../types';

export interface UserProfile {
  id?: string | number; // Opcional, mas comum
  nome: string;
  email: string;
}

// --- Perfil de Usuário Inicial/Padrão ---
const initialUserProfile: UserProfile = {
  nome: '',
  email: '',
};

interface LoginSuccessPayload {
  token: string;
  user: UserProfile;
}

interface LoginRequestPayload {
  email: string;
  password: string;
  prevPath: string;
}

interface RegisterSuccessPayload {
  user: UserProfile; // Usuário criado retornado pelo backend
  token?: string; // Se o registro também realizar o login
  message?: string; // Mensagem opcional de sucesso
}

interface RegisterRequestPayload {
  nome: string;
  email: string;
  password: string;
  id?: string | number; // Adicionado id para consistência se for edição
}

// --- Interfaces das Ações ---

interface LoginSuccessAction extends Action {
  type: typeof types.LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
}
interface LoginFailureAction extends Action {
  type: typeof types.LOGIN_FAILURE;
}
interface LoginRequestAction extends Action {
  type: typeof types.LOGIN_REQUEST;
  payload: LoginRequestPayload;
}
interface RegisterSuccessAction extends Action {
  type: typeof types.REGISTER_SUCCESS;
  payload: RegisterSuccessPayload; // Mantendo consistência com sua action creator
}
interface RegisterRequestAction extends Action {
  type: typeof types.REGISTER_REQUEST;
  payload: RegisterRequestPayload; // Mantendo consistência com sua action creator
}
interface RegisterFailureAction extends Action {
  type: typeof types.REGISTER_FAILURE;
}

// --- Definição do Estado de Autenticação ---

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: UserProfile;
  isLoading: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  user: initialUserProfile,
  isLoading: false,
};

// --- Union Type para as Ações de Autenticação ---

type AuthAction =
  | LoginSuccessAction
  | LoginFailureAction
  | LoginRequestAction
  | RegisterSuccessAction
  | RegisterRequestAction
  | RegisterFailureAction;

// --- Reducer ---

const exampleReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.REGISTER_SUCCESS: {
      const newState: AuthState = { ...state };
      newState.isLoading = true;
      newState.user = {
        ...state.user,
        nome: action.payload.user.nome,
        email: action.payload.user.email,
      };
      return newState;
    }
    case types.REGISTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        token: null, // Limpa o token em caso de falha
        user: initialUserProfile, // Limpa o usuário
        isLoggedIn: false, // Garante que não está logado
      };
    }
    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default exampleReducer;
