import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromCollection from '@about/reducers/collection';

export interface AboutState {
  collection: fromCollection.State;
}

export const reducers = {
  collection: fromCollection.reducer,
};

export interface State extends fromRoot.State {
  about: AboutState;
}

export const selectAboutState = createFeatureSelector<AboutState>('about');
//
export const getAboutCollectionState = createSelector(selectAboutState, (state: AboutState) => state.collection);
export const getAboutCollectionEntities = createSelector(selectAboutState, (state: AboutState) => state.collection.entities);
export const getAboutCollectionLoading = createSelector(selectAboutState, (state: AboutState) => state.collection.loading);
export const getAboutCollectionLoaded = createSelector(selectAboutState, (state: AboutState) => state.collection.loaded);
export const getAboutCollectionError = createSelector(selectAboutState, (state: AboutState) => state.collection.error);
export const getAboutCollectionErrorMessage = createSelector(selectAboutState, (state: AboutState) => state.collection.errorMessage);
