import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as collection from './../actions/about-actions';

import {
  LoadAboutFailure,
  LoadAboutSuccess
} from '../actions/about-actions';

import { AboutService } from '../services/about.service';

@Injectable()
export class CollectionEffects {

  private delayTime = 500;

  constructor(
    private actions: Actions,
    private service: AboutService
  ) { }

  @Effect()
  loadCollection$ = this.actions.ofType(collection.AboutActionTypes.LOAD_ABOUT)
  .switchMap(() => this.service.getAbout()
  .map(data => new LoadAboutSuccess(data))
  .catch(err => of(new LoadAboutFailure(err)))
  );
}
