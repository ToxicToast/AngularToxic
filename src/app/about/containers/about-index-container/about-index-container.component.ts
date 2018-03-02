import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromAbout from '@about/reducers/index';
import * as aboutActions from '@about/actions/about-actions';

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
    private store: Store<fromAbout.State>
  ) {
    this.loading$ = this.store.select(fromAbout.getAboutCollectionLoading);
    this.loaded$ = this.store.select(fromAbout.getAboutCollectionLoaded);
    this.error$ = this.store.select(fromAbout.getAboutCollectionError);
    this.errorMessage$ = this.store.select(fromAbout.getAboutCollectionErrorMessage);
    this.about$ = this.store.select(fromAbout.getAboutCollectionEntities);
  }

  ngOnInit() {
    this.store.dispatch(new aboutActions.LoadAbout());
  }

}
