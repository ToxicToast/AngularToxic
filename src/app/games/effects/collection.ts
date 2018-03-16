import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as collection from '@games/actions/games-actions';

import {
  LoadGamesSuccess,
  LoadGamesFailure
} from '@games/actions/games-actions';

import { GamesService } from '@games/services/games.service';

@Injectable()
export class CollectionEffects {

  private delayTime = 500;

  constructor(
    private actions: Actions,
    private service: GamesService
  ) { }

  @Effect()
  loadCollection$ = this.actions.ofType(collection.GamesActionTypes.LOAD_GAMES)
  .switchMap(() => this.service.getGames()
  .map(data => new LoadGamesSuccess(data))
  .catch(err => of(new LoadGamesFailure(err)))
  );

  @Effect()
  searchCollection$ = this.actions.ofType(collection.GamesActionTypes.SEARCH_GAME)
  .switchMap(payload => this.service.searchGames(payload)
  .map(data => new LoadGamesSuccess(data))
  .catch(err => of(new LoadGamesFailure(err)))
  );
}
