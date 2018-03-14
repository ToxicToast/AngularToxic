import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions, Response } from '@angular/http';

import { Store } from '@ngrx/store';

import { environment } from '@env/environment';

import * as collection from '@games/actions/games-actions';
import * as fromGames from '@games/reducers/index';

@Injectable()
export class GamesService {
  private baseUrl;

  constructor(
    private http: HttpClient,
    private store: Store<fromGames.State>,
  ) {
    this.baseUrl = environment.api.blog;
  }

  getGames() {
    const endpoint = '/games';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

}
