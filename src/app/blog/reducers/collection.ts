import { BlogActionTypes, BlogActions } from '@blog/actions/blog-actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  entities: any[];
  entity: any[];
  categories: any[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: false,
  errorMessage: '',
  entities: [],
  entity: [],
  categories: [],
};

export function reducer(state = initialState, action: BlogActions): State {
  switch (action.type) {
    case BlogActionTypes.LOAD_POSTS: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        errorMessage: '',
      });
    }

    case BlogActionTypes.LOAD_POSTS_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: false,
        errorMessage: '',
        entities: action.payload
      });
    }

    case BlogActionTypes.LOAD_POSTS_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        errorMessage: action.payload,
        entities: []
      });
    }

    case BlogActionTypes.LOAD_LASTPOST: {
      return Object.assign({}, state, {
        entity: []
      });
    }

    case BlogActionTypes.LOAD_LASTPOST_SUCCESS: {
      return Object.assign({}, state, {
        entity: action.payload
      });
    }

    case BlogActionTypes.LOAD_LASTPOST_FAILURE: {
      return Object.assign({}, state, {
        error: true,
        errorMessage: action.payload,
        entity: []
      });
    }

    case BlogActionTypes.LOAD_CATEGORIES: {
      return Object.assign({}, state, {
        categories: []
      });
    }

    case BlogActionTypes.LOAD_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        categories: action.payload.data
      });
    }

    case BlogActionTypes.LOAD_CATEGORIES_FAILURE: {
      return Object.assign({}, state, {
        error: true,
        errorMessage: action.payload,
        categories: []
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
export const getCategories = (state: State) => state.categories;
