import { UsersActionTypes, UsersActions } from '@users/actions/users-actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  entities: any[];
  entity: any;
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: false,
  errorMessage: '',
  entities: [],
  entity: {},
};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {

    case UsersActionTypes.LOAD_USERS: {
      return Object.assign({}, state, {
        loaded: false,
        loading: true,
        error: false,
        errorMessage: '',
        entities: [],
      });
    }

    case UsersActionTypes.LOAD_USERS_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        error: false,
        errorMessage: '',
        entities: action.payload,
      });
    }

    case UsersActionTypes.LOAD_USERS_FAILURE: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        error: true,
        errorMessage: action.payload,
        entities: []
      });
    }

    case UsersActionTypes.LOAD_USER: {
      return Object.assign({}, state, {
        loaded: false,
        loading: true,
        error: false,
        errorMessage: '',
        entity: []
      });
    }

    case UsersActionTypes.LOAD_USER_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        error: false,
        errorMessage: '',
        entity: action.payload
      });
    }

    case UsersActionTypes.LOAD_USER_FAILURE: {
      return Object.assign({}, state, {
        loaded: false,
        loading: false,
        error: true,
        errorMessage: action.payload,
        entity: {}
      });
    }

    case UsersActionTypes.REFRESH_USERS: {
      return Object.assign({}, state, {
        loaded: false,
        loading: true,
        error: false,
        errorMessage: '',
        entities: [],
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
