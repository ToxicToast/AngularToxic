import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';

import * as collection from '../actions/about-actions';
import * as fromAbout from '../reducers/index';

@Injectable()
export class AboutService {
  private baseUrl;

  constructor(
    private http: HttpClient,
    private store: Store<fromAbout.State>,
  ) {
    this.baseUrl = environment.api.blog;
  }

  getAbout() {
    const endpoint = '/about';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

}
