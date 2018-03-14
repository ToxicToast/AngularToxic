import { Action } from '@ngrx/store';

export enum GamesActionTypes {
  LOAD_GAMES = '[Blog] Load Games',
  LOAD_GAMES_SUCCESS = '[Blog] Successfully loaded Games',
  LOAD_GAMES_FAILURE = '[Blog] Failed loading Games',
}

export class LoadGames implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES;
}

export class LoadGamesSuccess implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadGamesFailure implements Action {
  readonly type = GamesActionTypes.LOAD_GAMES_FAILURE;
  constructor(public payload: string) {}
}

export type GamesActions = LoadGames | LoadGamesSuccess | LoadGamesFailure;
