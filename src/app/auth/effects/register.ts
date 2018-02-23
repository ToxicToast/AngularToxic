import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as collection from './../actions/auth-actions';
import {
  RegisterUserSuccess,
  RegisterUserFailure
} from './../actions/auth-actions';

import { AuthService } from '../services/auth.service';

@Injectable()
export class RegisterEffects {

  private delayTime = 500;

  constructor(
    private actions: Actions,
    private service: AuthService
  ) { }

  @Effect()
		registerUser$ = this.actions.ofType(collection.AuthActionTypes.REGISTER_USER)
		.switchMap(payload => this.service.registerUser(payload)
			.map(data => new RegisterUserSuccess(data))
			.catch(err => of(new RegisterUserFailure(err)))
		);

}
