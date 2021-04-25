import { createAction } from '@reduxjs/toolkit';

export const signupRequest = createAction('auth/registerRequest');
export const signupSuccess = createAction('auth/registerSuccess');
export const signupError = createAction('auth/registerError');

export const signinRequest = createAction('auth/loginRequest');
export const signinSuccess = createAction('auth/loginSuccess');
export const signinError = createAction('auth/loginError');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction('auth/logoutError');

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
