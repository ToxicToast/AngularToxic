import { Action } from '@ngrx/store';

export enum AboutActionTypes {
  LOAD_ABOUT = '[About] Load About Text',
  LOAD_ABOUT_SUCCESS = '[About] successfully loaded About',
  LOAD_ABOUT_FAILURE = '[About] failed loading About',
}

export class LoadAbout implements Action {
  readonly type = AboutActionTypes.LOAD_ABOUT;
}

export class LoadAboutSuccess implements Action {
  readonly type = AboutActionTypes.LOAD_ABOUT_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadAboutFailure implements Action {
  readonly type = AboutActionTypes.LOAD_ABOUT_FAILURE;
  constructor(public payload: string) {}
}

export type AboutAction = LoadAbout | LoadAboutSuccess | LoadAboutFailure;
