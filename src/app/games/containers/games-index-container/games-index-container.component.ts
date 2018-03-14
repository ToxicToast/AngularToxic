import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromGames from '@games/reducers/index';
import * as gamesActions from '@games/actions/games-actions';

@Component({
  selector: 'toxic-games-index-container',
  templateUrl: './games-index-container.component.html',
  styleUrls: ['./games-index-container.component.scss']
})
export class GamesIndexContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  games$: Observable<any>;

  constructor(
    private store: Store<fromGames.State>
  ) {
    this.loading$ = this.store.select(fromGames.getGamesCollectionLoading);
    this.loaded$ = this.store.select(fromGames.getGamesCollectionLoaded);
    this.error$ = this.store.select(fromGames.getGamesCollectionError);
    this.errorMessage$ = this.store.select(fromGames.getGamesCollectionErrorMessage);
    this.games$ = this.store.select(fromGames.getGamesCollectionEntities);
  }

  ngOnInit() {
    this.store.dispatch(new gamesActions.LoadGames());
  }

}
