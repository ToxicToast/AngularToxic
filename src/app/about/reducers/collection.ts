import { AboutActionTypes, AboutAction } from '@about/actions/about-actions';

export interface State {
  loaded: boolean;
  loading: boolean;
  error: boolean;
  errorMessage: string;
  entities: any[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  error: false,
  errorMessage: '',
  entities: [],
};

export function reducer(state = initialState, action: AboutAction): State {
  switch (action.type) {

    case AboutActionTypes.LOAD_ABOUT: {
      return Object.assign({}, state, {
        loaded: false,
        loading: true,
        error: false,
        errorMessage: '',
        entities: [],
      });
    }

    case AboutActionTypes.LOAD_ABOUT_SUCCESS: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        entities: action.payload.data,
      });
    }

    case AboutActionTypes.LOAD_ABOUT_FAILURE: {
      return Object.assign({}, state, {
        loaded: true,
        loading: false,
        error: true,
        entities: [],
        errorMessage: action.payload
      });
    }

    default:
      return state;
  }
}

export const getEntities = (state: State) => state.entities;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getError = (state: State) => state.error;
export const getErrorMessage = (state: State) => state.errorMessage;
