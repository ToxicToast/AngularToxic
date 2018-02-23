import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '../../core/reducers/index';
import * as fromCollection from '../reducers/collection';
import * as fromConfiguration from '../reducers/configuration';
import * as fromComments from '../reducers/comments';

export interface BlogState {
  collection: fromCollection.State;
  configuration: fromConfiguration.State;
  comments: fromComments.State;
}

export const reducers = {
  collection: fromCollection.reducer,
  configuration: fromConfiguration.reducer,
  comments: fromComments.reducer,
};

export interface State extends fromRoot.State {
  blog: BlogState;
}

export const selectBlogState = createFeatureSelector<BlogState>('blog');
//
export const getBlogCollectionState = createSelector(selectBlogState, (state: BlogState) => state.collection);
export const getBlogCollectionEntities = createSelector(selectBlogState, (state: BlogState) => state.collection.entities);
export const getBlogCollectionLoading = createSelector(selectBlogState, (state: BlogState) => state.collection.loading);
export const getBlogCollectionLoaded = createSelector(selectBlogState, (state: BlogState) => state.collection.loaded);
export const getBlogCollectionError = createSelector(selectBlogState, (state: BlogState) => state.collection.error);
export const getBlogCollectionErrorMessage = createSelector(selectBlogState, (state: BlogState) => state.collection.errorMessage);
export const getBlogCollectionLastEntity = createSelector(selectBlogState, (state: BlogState) => state.collection.entity);
export const getBlogCollectionCategories = createSelector(selectBlogState, (state: BlogState) => state.collection.categories);
//
export const getBlogConfigurationState = createSelector(selectBlogState, (state: BlogState) => state.configuration);
export const getBlogConfigurationCategory = createSelector(selectBlogState, (state: BlogState) => state.configuration.category);
//
export const getBlogCommentsState = createSelector(selectBlogState, (state: BlogState) => state.comments);
export const getBlogCommentsEntities = createSelector(selectBlogState, (state: BlogState) => state.comments.entities);
export const getBlogCommentsLoading = createSelector(selectBlogState, (state: BlogState) => state.comments.loading);
export const getBlogCommentsLoaded = createSelector(selectBlogState, (state: BlogState) => state.comments.loaded);
export const getBlogCommentsError = createSelector(selectBlogState, (state: BlogState) => state.comments.error);
export const getBlogCommentsErrorMessage = createSelector(selectBlogState, (state: BlogState) => state.comments.errorMessage);
