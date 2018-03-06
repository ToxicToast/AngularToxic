import { Component, OnInit, Input } from '@angular/core';

import { SessionStorage } from '@core/helpers/sessionStorage';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '@core/reducers/index';
import * as fromAuth from '@auth/reducers/index';
import * as authActions from '@auth/actions/auth-actions';


@Component({
  selector: 'toxic-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  @Input() user: any;

  loggedUserDrop = false;

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() { }

  onDropdown() {
    if (!this.loggedUserDrop) {
      this.loggedUserDrop = true;
    } else {
      this.loggedUserDrop = false;
    }
  }

  onLogout() {
    const storage = new SessionStorage('loggedUser');
    storage.removeItem();
    this.store.dispatch(new authActions.GetLoggedUser(null));
  }

  dropdownClass() {
    if (this.loggedUserDrop) {
      return 'dropdown-menu dropdown-menu-right show';
    } else {
      return 'dropdown-menu dropdown-menu-right';
    }
  }

}
