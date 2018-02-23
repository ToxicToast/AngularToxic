import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  REGISTER_USER = '[Auth] Register User',
  REGISTER_USER_SUCCESS = '[Auth] successfully registered User',
  REGISTER_USER_FAILURE = '[Auth] failed registering User',

  LOGIN_USER = '[Auth] Login User',
  LOGIN_USER_SUCCESS = '[Auth] successfully Logged in User',
  LOGIN_USER_FAILURE = '[Auth] failed Logging in User',

  GET_LOGGED_USER = '[Auth] Get Logged User',

  GET_LOGGED_USER_TOKEN = '[Auth] Get Logged User with Token',
  GET_LOGGED_USER_TOKEN_SUCCESS = '[Auth] successfully got Userdata by Token',
  GET_LOGGED_USER_TOKEN_FAILURE = '[Auth] failed getting Userdata by Token',
}

export class RegisterUser implements Action {
  readonly type = AuthActionTypes.REGISTER_USER;
  constructor(public payload: any) {}
}

export class RegisterUserSuccess implements Action {
  readonly type = AuthActionTypes.REGISTER_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class RegisterUserFailure implements Action {
  readonly type = AuthActionTypes.REGISTER_USER_FAILURE;
  constructor(public payload: string) {}
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.LOGIN_USER;
  constructor(public payload: any) {}
}

export class LoginUserSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginUserFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_USER_FAILURE;
  constructor(public payload: string) {}
}

export class GetLoggedUser implements Action {
  readonly type = AuthActionTypes.GET_LOGGED_USER;
  constructor(public payload: any) {}
}

export class GetLoggedUserWithToken implements Action {
  readonly type = AuthActionTypes.GET_LOGGED_USER_TOKEN;
  constructor(public payload: string) {}
}

export class GetLoggedUserWithTokenSuccess implements Action {
  readonly type = AuthActionTypes.GET_LOGGED_USER_TOKEN_SUCCESS;
  constructor(public payload: any) {}
}

export class GetLoggedUserWithTokenFailure implements Action {
  readonly type = AuthActionTypes.GET_LOGGED_USER_TOKEN_FAILURE;
  constructor(public payload: string) {}
}

export type AuthActions = RegisterUser | RegisterUserSuccess | RegisterUserFailure |
  LoginUser | LoginUserSuccess | LoginUserFailure |
  GetLoggedUser | GetLoggedUserWithToken | GetLoggedUserWithTokenSuccess |
  GetLoggedUserWithTokenFailure;
