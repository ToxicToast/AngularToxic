import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';

import * as collection from '../actions/users-actions';
import * as fromUsers from '../reducers/index';

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

  getUser(id) {
    const endpoint = '/users';
    const url = `${this.baseUrl}${endpoint}/${id}`;
    return this.http.get(url);
  }

}
