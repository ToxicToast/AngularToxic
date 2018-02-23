import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromBlog from '../../reducers/index';
import * as blogActions from '../../actions/blog-actions';

@Component({
  selector: 'toxic-blog-index-container',
  templateUrl: './blog-index-container.component.html',
  styleUrls: ['./blog-index-container.component.scss']
})
export class BlogIndexContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  posts$: Observable<any[]>;
  lastPost$: Observable<any[]>;
  categories$: Observable<any[]>;
  selectedCategory$: Observable<number>;


  constructor(
    private store: Store<fromBlog.State>
  ) {
    this.loading$ = this.store.select(fromBlog.getBlogCollectionLoading);
    this.loaded$ = this.store.select(fromBlog.getBlogCollectionLoaded);
    this.error$ = this.store.select(fromBlog.getBlogCollectionError);
    this.errorMessage$ = this.store.select(fromBlog.getBlogCollectionErrorMessage);
    this.posts$ = this.store.select(fromBlog.getBlogCollectionEntities);
    this.lastPost$ = this.store.select(fromBlog.getBlogCollectionLastEntity);
    this.categories$ = this.store.select(fromBlog.getBlogCollectionCategories);
    this.selectedCategory$ = this.store.select(fromBlog.getBlogConfigurationCategory);
  }

  ngOnInit() {
    this.store.dispatch(new blogActions.LoadPosts(0));
    this.store.dispatch(new blogActions.LoadLastPost());
    this.store.dispatch(new blogActions.LoadCategories());
  }

  onRefresh() {
    this.store.dispatch(new blogActions.RefreshPosts());
    this.store.dispatch( new blogActions.ChangeCategory(0));
  }

  onClickedCategory(categoryId) {
    this.store.dispatch( new blogActions.ChangeCategory(categoryId));
  }

}
