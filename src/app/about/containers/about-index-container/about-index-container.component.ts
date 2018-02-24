import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

// import * as fromAbout from '../../reducers/index';
import * as aboutActions from '../../actions/about-actions';

@Component({
  selector: 'toxic-about-index-container',
  templateUrl: './about-index-container.component.html',
  styleUrls: ['./about-index-container.component.scss']
})
export class AboutIndexContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  about$: Observable<any[]>;

  constructor(
    // private store: Store<fromAbout.State>
  ) {
    // this.loading$ = this.store.select(fromAbout.getUsersCollectionLoading);
    // this.loaded$ = this.store.select(fromAbout.getUsersCollectionLoaded);
    // this.error$ = this.store.select(fromAbout.getUsersCollectionError);
    // this.errorMessage$ = this.store.select(fromAbout.getUsersCollectionErrorMessage);
  }

  ngOnInit() {
    // this.store.dispatch(new aboutActions.LoadAbout());
  }

}
