import { Component, OnInit } from '@angular/core';

import { SessionStorage } from '../../../core/helpers/sessionStorage';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers/index';
import * as fromAuth from '../../../auth/reducers/index';
import * as authActions from '../../../auth/actions/auth-actions';


@Component({
  selector: 'toxic-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {

  loggedUser$: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.loggedUser$ = this.store.select(fromAuth.getAuthLoginEntity);
  }

  ngOnInit() { }


}
