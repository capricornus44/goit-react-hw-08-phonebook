import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  signupSuccess,
  signinSuccess,
  logoutSuccess,
  signupError,
  signinError,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initUserState = {
  name: '',
  email: '',
  idToken: '',
  refreshToken: '',
  localId: '',
  registered: false,
};

const user = createReducer(initUserState, {
  [signupSuccess]: (_, { payload }) => payload,
  [signinSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer('', {
  [signupSuccess]: (_, { payload }) => payload.idToken,
  [signinSuccess]: (_, { payload }) => payload.idToken,
  [logoutSuccess]: () => '',
});

const setError = (_, { payload }) => payload;

const error = createReducer('', {
  [signupError]: setError,
  [signinError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [signupSuccess]: () => true,
  [signinSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [signupError]: () => false,
  [signinError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
