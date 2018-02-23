import { BlogActionTypes, BlogActions } from '../actions/blog-actions';

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
  entity: []
};

export function reducer(state = initialState, action: BlogActions): State {
  switch (action.type) {
    case BlogActionTypes.LOAD_COMMENTS: {
      return Object.assign({}, state, {
        loaded: false,
        loading: true,
        error: false,
        entities: []
      });
    }

    case BlogActionTypes.LOAD_COMMENTS_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        error: false,
        entities: action.payload.data
      });
    }

    case BlogActionTypes.LOAD_COMMENTS_FAILURE: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        error: true,
        errorMessage: action.payload,
        entities: []
      });
    }

    case BlogActionTypes.REFRESH_COMMENTS: {
      return Object.assign({}, state, {
        loaded: false,
        loading: true,
        error: false,
        entities: []
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
