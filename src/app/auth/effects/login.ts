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

import * as collection from './../actions/auth-actions';
import {
  LoginUserSuccess,
  LoginUserFailure,
  GetLoggedUserWithTokenSuccess,
  GetLoggedUserWithTokenFailure
} from './../actions/auth-actions';

import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginEffects {

  private delayTime = 500;

  constructor(
    private actions: Actions,
    private service: AuthService
  ) { }

  @Effect()
  loginUser$ = this.actions.ofType(collection.AuthActionTypes.LOGIN_USER)
  .switchMap(payload => this.service.loginUser(payload)
  .map(data => new LoginUserSuccess(this.logUser(data)))
  .catch(err => of(new LoginUserFailure(err))));

  @Effect()
  loggedUser$ = this.actions.ofType(collection.AuthActionTypes.GET_LOGGED_USER_TOKEN)
  .switchMap(payload => this.logData(payload)
  .map(data => new GetLoggedUserWithTokenSuccess(data))
  .catch(err => of(new GetLoggedUserWithTokenFailure(err))));



  @Effect({ dispatch: false })
  getLoggedUser$ = this.actions.ofType(collection.AuthActionTypes.LOGIN_USER_SUCCESS).do(data => {
      this.service.requestUserByToken(data);
  });

  private logUser(payload) {
    const { data } = payload;
    return data;
  }

  private logData(data) {
    return this.service.getUserByToken(data);
  }

}
