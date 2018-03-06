import { AuthActionTypes, AuthActions } from '@auth/actions/auth-actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  entity: any;
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: false,
  errorMessage: '',
  entity: []
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.REGISTER_USER: {
      return Object.assign({}, state, {
      loading: true,
      loaded: false,
      error: false,
      errorMessage: '',
      });
    }

    case AuthActionTypes.REGISTER_USER_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: false,
        entity: action.payload,
      });
    }

    case AuthActionTypes.REGISTER_USER_FAILURE: {
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
