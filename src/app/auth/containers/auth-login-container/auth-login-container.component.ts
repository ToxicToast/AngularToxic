import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SessionStorage } from '../../../core/helpers/sessionStorage';

import { Store } from '@ngrx/store';

import * as fromAuth from '../../reducers/index';
import * as authActions from '../../actions/auth-actions';

@Component({
  selector: 'toxic-auth-login-container',
  templateUrl: './auth-login-container.component.html',
  styleUrls: ['./auth-login-container.component.scss']
})
export class AuthLoginContainerComponent implements OnInit {

  loggedUser$: Observable<any[]>;

  constructor(
    private store: Store<fromAuth.State>,
    private router: Router
  ) {
    this.loggedUser$ = this.store.select(fromAuth.getAuthLoginEntity);
  }

  ngOnInit() {
  }

  onLogin(user) {
    this.store.dispatch(new authActions.LoginUser(user));
  }

}
