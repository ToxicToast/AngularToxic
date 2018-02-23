import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '../../core/reducers/index';
import * as fromCollection from '../reducers/collection';

export interface UsersState {
	collection: fromCollection.State;
}

export const reducers = {
	collection: fromCollection.reducer,
};

export interface State extends fromRoot.State {
  users: UsersState;
}

export const selectUsersState = createFeatureSelector<UsersState>('users');
//
export const getUsersCollectionState = createSelector(selectUsersState, (state: UsersState) => state.collection);
export const getUsersCollectionEntities = createSelector(selectUsersState, (state: UsersState) => state.collection.entities);
export const getUsersCollectionLoading = createSelector(selectUsersState, (state: UsersState) => state.collection.loading);
export const getUsersCollectionLoaded = createSelector(selectUsersState, (state: UsersState) => state.collection.loaded);
export const getUsersCollectionError = createSelector(selectUsersState, (state: UsersState) => state.collection.error);
export const getUsersCollectionErrorMessage = createSelector(selectUsersState, (state: UsersState) => state.collection.errorMessage);
