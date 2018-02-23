import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as collection from './../actions/blog-actions';
import {
LoadPostsSuccess,
LoadPostsFailure,
LoadLastPostSuccess,
LoadLastPostFailure,
LoadCategoriesSuccess,
LoadCategoriesFailure,
LoadCommentsSuccess,
LoadCommentsFailure,
AddCommentsSuccess,
AddCommentsFailure
} from './../actions/blog-actions';

import { PostsService } from '../services/posts.service';

@Injectable()
export class CollectionEffects {

  private delayTime = 500;

  constructor(
    private actions: Actions,
    private service: PostsService
  ) { }


  @Effect()
  loadCollection$ = this.actions.ofType(collection.BlogActionTypes.LOAD_POSTS)
  .switchMap(payload => this.service.switchPost(payload)
  .map(data => new LoadPostsSuccess(data))
  .catch(err => of(new LoadPostsFailure(err)))
  );

  @Effect()
  loadLastPost$ = this.actions.ofType(collection.BlogActionTypes.LOAD_LASTPOST)
  .switchMap(() => this.service.getLastPost().map((posts) => new LoadLastPostSuccess(posts)))
  .catch((error) => of(new LoadLastPostFailure(error)));

  @Effect()
  loadCategories$ = this.actions.ofType(collection.BlogActionTypes.LOAD_CATEGORIES)
  .switchMap(() => this.service.getCategories().map((categories) => new LoadCategoriesSuccess(categories)))
  .catch((error) => of(new LoadCategoriesFailure(error)));

  @Effect()
  loadComments$ = this.actions.ofType(collection.BlogActionTypes.LOAD_COMMENTS)
  .switchMap(payload => this.service.getComments(payload)
  .map(data => new LoadCommentsSuccess(data))
  .catch(err => of(new LoadCommentsFailure(err))));

  @Effect()
  addComments$ = this.actions.ofType(collection.BlogActionTypes.ADD_COMMENTS)
  .switchMap(payload => this.service.addComments(payload)
  .map(data => new AddCommentsSuccess(data))
  .catch(err => of(new AddCommentsFailure(err))));

  @Effect()
  loadCollectionCategory$ = this.actions.ofType(collection.BlogActionTypes.CHANGE_CATEGORY)
  .switchMap(payload => this.service.getCategoryPosts(payload)
  .map(data => new LoadPostsSuccess(data))
  .catch(err => of(new LoadPostsFailure(err))));
}
