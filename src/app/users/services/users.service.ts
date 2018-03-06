import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';

import { environment } from '@env/environment';

import * as collection from '@users/actions/users-actions';
import * as fromUsers from '@users/reducers/index';

@Injectable()
export class UsersService {
  private baseUrl;

  constructor(
    private http: HttpClient,
    private store: Store<fromUsers.State>,
  ) {
    this.baseUrl = environment.api.blog;
  }

  getUsers() {
    const endpoint = '/users';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

  getUser(data) {
    const { payload } = data;
    const endpoint = '/users';
    const url = `${this.baseUrl}${endpoint}/${payload}`;
    return this.http.get(url);
  }

}
