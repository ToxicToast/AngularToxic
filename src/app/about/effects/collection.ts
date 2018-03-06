import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as collection from '@about/actions/about-actions';

import {
  LoadAboutFailure,
  LoadAboutSuccess
} from '@about/actions/about-actions';

import { AboutService } from '@about/services/about.service';

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
