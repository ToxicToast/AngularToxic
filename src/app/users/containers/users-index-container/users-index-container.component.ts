import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserModel } from '@users/models/user.model';

import { Store } from '@ngrx/store';

import * as fromUsers from '@users/reducers/index';
import * as usersActions from '@users/actions/users-actions';

@Component({
  selector: 'toxic-users-index-container',
  templateUrl: './users-index-container.component.html',
  styleUrls: ['./users-index-container.component.scss']
})
export class UsersIndexContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  users$: Observable<UserModel[]>;

  constructor(
    private store: Store<fromUsers.State>,
    private router: Router
  ) {
    this.loading$ = this.store.select(fromUsers.getUsersCollectionLoading);
    this.loaded$ = this.store.select(fromUsers.getUsersCollectionLoaded);
    this.error$ = this.store.select(fromUsers.getUsersCollectionError);
    this.errorMessage$ = this.store.select(fromUsers.getUsersCollectionErrorMessage);
    this.users$ = this.store.select(fromUsers.getUsersCollectionEntities);
  }

  ngOnInit() {
    this.store.dispatch(new usersActions.LoadUsers());
  }

  onRefresh() {
    this.store.dispatch(new usersActions.ReloadUsers());
  }

}
