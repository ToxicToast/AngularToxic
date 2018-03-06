import { AuthActionTypes, AuthActions } from '@auth/actions/auth-actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  entity: any;
  token: string;
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: false,
  errorMessage: '',
  entity: {},
  token: ''
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        errorMessage: '',
        entity: {}
      });
    }

    case AuthActionTypes.LOGIN_USER_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: false,
        errorMessage: '',
        entity: action.payload,
        token: action.payload
      });
    }

    case AuthActionTypes.LOGIN_USER_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        errorMessage: action.payload,
        entity: {},
      });
    }

    case AuthActionTypes.GET_LOGGED_USER: {
      return Object.assign({}, state, {
        entity: action.payload,
      });
    }

    case AuthActionTypes.GET_LOGGED_USER_TOKEN: {
      return Object.assign({}, state, {
        token: action.payload,
      });
    }

    case AuthActionTypes.GET_LOGGED_USER_TOKEN_SUCCESS: {
      return Object.assign({}, state, {
        entity: action.payload.data,
      });
    }

    case AuthActionTypes.GET_LOGGED_USER_TOKEN_FAILURE: {
      return Object.assign({}, state, {
        errorMessage: action.payload,
      });
    }

    default:
      return state;
  }
}
