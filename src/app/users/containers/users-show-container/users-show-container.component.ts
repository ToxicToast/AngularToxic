import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromUsers from '@users/reducers/index';
import * as usersActions from '@users/actions/users-actions';

@Component({
  selector: 'toxic-users-show-container',
  templateUrl: './users-show-container.component.html',
  styleUrls: ['./users-show-container.component.scss']
})
export class UsersShowContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  user$: Observable<any>;
  userId: number;
  private sub: any;

  constructor(
    private store: Store<fromUsers.State>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loading$ = this.store.select(fromUsers.getUsersCollectionLoading);
    this.loaded$ = this.store.select(fromUsers.getUsersCollectionLoaded);
    this.error$ = this.store.select(fromUsers.getUsersCollectionError);
    this.errorMessage$ = this.store.select(fromUsers.getUsersCollectionErrorMessage);
    this.user$ = this.store.select(fromUsers.getUsersCollectionEntity);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.store.dispatch(new usersActions.LoadUser(this.userId));
    });
  }

}
