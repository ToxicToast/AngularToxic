import { BlogActionTypes, BlogActions } from '@blog/actions/blog-actions';

export interface State {
  page: number;
  view: string;
  category: number;
}

const initialState: State = {
  page: 0,
  view: 'list',
  category: 0
};

export function reducer(state = initialState, action: BlogActions): State {
  switch (action.type) {
    case BlogActionTypes.CHANGE_CATEGORY: {
      return Object.assign({}, state, {
        category: action.payload
      });
    }
    default:
      return state;
  }
}

export const getPage = (state: State) => state.page;
export const getView = (state: State) => state.view;
export const getCategory = (state: State) => state.category;
