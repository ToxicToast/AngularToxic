import { Action } from '@ngrx/store';

export enum UsersActionTypes {
  LOAD_USERS = '[Blog] Load Users',
  LOAD_USERS_SUCCESS = '[Blog] Successfully loaded Users',
  LOAD_USERS_FAILURE = '[Blog] Failed loading Users',

  LOAD_USER = '[Blog] Load User',
  LOAD_USER_SUCCESS = '[Blog] Successfully loaded User',
  LOAD_USER_FAILURE = '[Blog] Failed loading User',

  REFRESH_USERS = '[Blog] Reload Users'
}

export class ReloadUsers implements Action {
  readonly type = UsersActionTypes.REFRESH_USERS;
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadUsersFailure implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_FAILURE;
  constructor(public payload: string) {}
}

export class LoadUser implements Action {
  readonly type = UsersActionTypes.LOAD_USER;
  constructor(public payload: number) {}
}

export class LoadUserSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadUserFailure implements Action {
  readonly type = UsersActionTypes.LOAD_USER_FAILURE;
  constructor(public payload: string) {}
}

export type UsersActions = LoadUsers | LoadUsersSuccess | LoadUsersFailure |
LoadUser| LoadUserSuccess | LoadUserFailure;
