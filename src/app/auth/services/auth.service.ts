import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorage } from '../../core/helpers/sessionStorage';

import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';

import * as collection from '../actions/auth-actions';
import * as fromAuth from '../reducers/index';

@Injectable()
export class AuthService {
  private baseUrl;

  constructor(
    private http: HttpClient,
    private store: Store<fromAuth.State>,
  ) {
    this.baseUrl = environment.api.blog;
  }

  registerUser(data) {
    const { payload } = data;
    const endpoint = '/auth/register';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.post(url, payload);
  }

  loginUser(data) {
    const { payload } = data;
    const endpoint = '/auth/login';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.post(url, payload);
  }

  getUserByToken(data) {
    const { payload } = data;
    const endpoint = '/auth/me';
    const url = `${this.baseUrl}${endpoint}?token=${payload}`;
    return this.http.get(url);
  }

  requestUserByToken(data) {
    const { payload } = data;
    const { access_token } = payload;
    this.store.dispatch(new collection.GetLoggedUserWithToken(access_token));
    //
    const storage = new SessionStorage('loggedUser');
    storage.addItem(access_token);
  }
}
