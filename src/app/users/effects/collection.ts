import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as collection from './../actions/users-actions';

import {
  LoadUsersSuccess,
  LoadUsersFailure
} from '../actions/users-actions';

import { UsersService } from '../services/users.service';

@Injectable()
export class CollectionEffects {

  private delayTime = 500;

  constructor(
    private actions: Actions,
    private service: UsersService
  ) { }

  @Effect()
  loadCollection$ = this.actions.ofType(collection.UsersActionTypes.LOAD_USERS)
  .switchMap(() => this.service.getUsers()
  .map(data => new LoadUsersSuccess(data))
  .catch(err => of(new LoadUsersFailure(err)))
  );

}
