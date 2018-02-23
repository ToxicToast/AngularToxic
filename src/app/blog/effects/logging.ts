import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as collection from './../actions/blog-actions';

import { LoggingService } from '../services/logging.service';

import {
LoadPostsFailure,
LoadLastPostFailure,
LoadCategoriesFailure,
LoadCommentsFailure,
AddCommentsFailure
} from './../actions/blog-actions';

@Injectable()
export class LoggerEffects {

  private delayTime = 500;

  constructor(
    private actions: Actions,
    private service: LoggingService
  ) { }

  @Effect({ dispatch: false })
  logRefreshes$ = this.actions.ofType(collection.BlogActionTypes.REFRESH_POSTS).map(() => {
    const payload = { action: collection.BlogActionTypes.REFRESH_POSTS, level: 'action' };
    this.service.sendLog(payload);
  });

  @Effect({ dispatch: false })
  logLoadPostsError$ = this.actions.ofType(collection.BlogActionTypes.LOAD_POSTS_FAILURE).map(() => {
    const payload = { action: collection.BlogActionTypes.LOAD_POSTS_FAILURE, level: 'error' };
    this.service.sendLog(payload);
  });

  @Effect({ dispatch: false })
  logLoadLastPostsError$ = this.actions.ofType(collection.BlogActionTypes.LOAD_LASTPOST_FAILURE).map(() => {
    const payload = { action: collection.BlogActionTypes.LOAD_LASTPOST_FAILURE, level: 'error' };
    this.service.sendLog(payload);
  });

  @Effect({ dispatch: false })
  logLoadCategoriesError$ = this.actions.ofType(collection.BlogActionTypes.LOAD_CATEGORIES_FAILURE).map(() => {
    const payload = { action: collection.BlogActionTypes.LOAD_CATEGORIES_FAILURE, level: 'error' };
    this.service.sendLog(payload);
  });
}
