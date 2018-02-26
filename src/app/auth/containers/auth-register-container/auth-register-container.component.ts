import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromAuth from '../../reducers/index';
import * as authActions from '../../actions/auth-actions';

@Component({
  selector: 'toxic-auth-register-container',
  templateUrl: './auth-register-container.component.html',
  styleUrls: ['./auth-register-container.component.scss']
})
export class AuthRegisterContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(
    private store: Store<fromAuth.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading$ = this.store.select(fromAuth.getAuthRegisterLoading);
    this.loaded$ = this.store.select(fromAuth.getAuthRegisterLoaded);
    this.error$ = this.store.select(fromAuth.getAuthRegisterError);
    this.errorMessage$ = this.store.select(fromAuth.getAuthRegisterErrorMessage);
  }

  onRegister(user) {
    console.log(user);
    this.store.dispatch(new authActions.RegisterUser(user));
    this.router.navigate(['/']);
  }
}
