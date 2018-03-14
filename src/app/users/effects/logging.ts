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

import * as collection from '@users/actions/users-actions';
import { LoggingService } from '@users/services/logging.service';

import {
LoadPostsFailure,
LoadLastPostFailure,
LoadCategoriesFailure,
LoadCommentsFailure,
AddCommentsFailure
} from '@blog/actions/blog-actions';

@Injectable()
export class LoggerEffects {

  private delayTime = 500;

  constructor(
    private actions: Actions,
    private service: LoggingService
  ) { }

  @Effect({ dispatch: false })
  logRefreshes$ = this.actions.ofType(collection.UsersActionTypes.REFRESH_USERS).map(() => {
    const payload = { action: collection.UsersActionTypes.REFRESH_USERS, level: 'action' };
    this.service.sendLog(payload);
  });

  @Effect({ dispatch: false })
  logLoadUsersError$ = this.actions.ofType(collection.UsersActionTypes.LOAD_USERS_FAILURE).map(() => {
    const payload = { action: collection.UsersActionTypes.LOAD_USERS_FAILURE, level: 'error' };
    this.service.sendLog(payload);
  });

  @Effect({ dispatch: false })
  logLoadUserError$ = this.actions.ofType(collection.UsersActionTypes.LOAD_USER_FAILURE).map(() => {
    const payload = { action: collection.UsersActionTypes.LOAD_USER_FAILURE, level: 'error' };
    this.service.sendLog(payload);
  });
}
