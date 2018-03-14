import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromCollection from '@games/reducers/collection';


export interface GamesState {
  collection: fromCollection.State;
}

export const reducers = {
  collection: fromCollection.reducer,
};

export interface State extends fromRoot.State {
  games: GamesState;
}

export const selectGamesState = createFeatureSelector<GamesState>('games');
//
export const getGamesCollectionEntities = createSelector(selectGamesState, (state: GamesState) => state.collection.entities);
export const getGamesCollectionLoading = createSelector(selectGamesState, (state: GamesState) => state.collection.loading);
export const getGamesCollectionLoaded = createSelector(selectGamesState, (state: GamesState) => state.collection.loaded);
export const getGamesCollectionError = createSelector(selectGamesState, (state: GamesState) => state.collection.error);
export const getGamesCollectionErrorMessage = createSelector(selectGamesState, (state: GamesState) => state.collection.errorMessage);
export const getGamesCollectionLastEntity = createSelector(selectGamesState, (state: GamesState) => state.collection.entity);
