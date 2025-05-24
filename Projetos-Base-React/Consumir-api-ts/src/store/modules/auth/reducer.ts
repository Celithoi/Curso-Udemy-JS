import { Action } from '@reduxjs/toolkit'; // Action ainda é útil aqui
import * as types from '../types';

// Interface específica para este "pedaço" do estado
export interface AuthState {
  isLoggedIn: boolean;
  token: boolean;
  user: object;
  isLoading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

const exampleReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.type);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default exampleReducer;
