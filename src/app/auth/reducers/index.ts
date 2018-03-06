import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';

import * as fromRegister from '@auth/reducers/register';
import * as fromLogin from '@auth/reducers/login';

export interface AuthState {
  register: fromRegister.State;
  login: fromLogin.State;
}

export const reducers = {
  register: fromRegister.reducer,
  login: fromLogin.reducer
};

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const selectAuthState = createFeatureSelector<AuthState>('auth');
//
export const getAuthRegisterState = createSelector(selectAuthState, (state: AuthState) => state.register);
export const getAuthRegisterLoading = createSelector(selectAuthState, (state: AuthState) => state.register.loading);
export const getAuthRegisterLoaded = createSelector(selectAuthState, (state: AuthState) => state.register.loaded);
export const getAuthRegisterError = createSelector(selectAuthState, (state: AuthState) => state.register.error);
export const getAuthRegisterErrorMessage = createSelector(selectAuthState, (state: AuthState) => state.register.errorMessage);
export const getAuthRegisterEntity = createSelector(selectAuthState, (state: AuthState) => state.register.entity);
//
export const getAuthLoginState = createSelector(selectAuthState, (state: AuthState) => state.login);
export const getAuthLoginLoading = createSelector(selectAuthState, (state: AuthState) => state.login.loading);
export const getAuthLoginLoaded = createSelector(selectAuthState, (state: AuthState) => state.login.loaded);
export const getAuthLoginError = createSelector(selectAuthState, (state: AuthState) => state.login.error);
export const getAuthLoginErrorMessage = createSelector(selectAuthState, (state: AuthState) => state.login.errorMessage);
export const getAuthLoginEntity = createSelector(selectAuthState, (state: AuthState) => state.login.entity);
