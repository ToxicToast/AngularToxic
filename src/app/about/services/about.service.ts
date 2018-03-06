import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';

import { environment } from '@env/environment';

import * as collection from '@about/actions/about-actions';
import * as fromAbout from '@about/reducers/index';

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
