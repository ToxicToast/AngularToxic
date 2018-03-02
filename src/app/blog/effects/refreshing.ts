import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as collection from '@blog/actions/blog-actions';
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
} from '@blog/actions/blog-actions';

import { PostsService } from '@blog/services/posts.service';

@Injectable()
export class RefreshingEffects {

  private delayTime = 500;

  constructor(
    private actions: Actions,
    private service: PostsService
  ) { }

  @Effect({ dispatch: false })
  refreshPosts$ = this.actions.ofType(collection.BlogActionTypes.REFRESH_POSTS).map(() => {
    this.service.refreshPosts();
  });

  @Effect({ dispatch: false })
  refreshComments$ = this.actions.ofType(collection.BlogActionTypes.ADD_COMMENTS_SUCCESS).map(payload => {
    this.service.refreshComments(payload);
  });
}
