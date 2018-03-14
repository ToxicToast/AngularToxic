import { GamesActionTypes, GamesActions } from '@games/actions/games-actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  entities: any[];
  entity: any[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: false,
  errorMessage: '',
  entities: [],
  entity: [],
};

export function reducer(state = initialState, action: GamesActions): State {
  switch (action.type) {
    case GamesActionTypes.LOAD_GAMES: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        errorMessage: '',
        entities: []
      });
    }
    case GamesActionTypes.LOAD_GAMES_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entities: action.payload
      });
    }
    case GamesActionTypes.LOAD_GAMES_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        errorMessage: action.payload,
      });
    }
    default:
      return state;
  }
}

export const getEntities = (state: State) => state.entities;
export const getEntity = (state: State) => state.entity;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getError = (state: State) => state.error;
export const getErrorMessage = (state: State) => state.errorMessage;

