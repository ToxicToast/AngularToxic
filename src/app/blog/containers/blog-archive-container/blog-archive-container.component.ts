import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PostModel } from '@blog/models/post.model';

import { Store } from '@ngrx/store';

import * as fromBlog from '@blog/reducers/index';
import * as blogActions from '@blog/actions/blog-actions';

@Component({
  selector: 'toxic-blog-archive-container',
  templateUrl: './blog-archive-container.component.html',
  styleUrls: ['./blog-archive-container.component.scss']
})
export class BlogArchiveContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  posts$: Observable<PostModel[]>;

  constructor(
    private store: Store<fromBlog.State>,
    private router: Router
  ) {
    this.loading$ = this.store.select(fromBlog.getBlogCollectionLoading);
    this.loaded$ = this.store.select(fromBlog.getBlogCollectionLoaded);
    this.error$ = this.store.select(fromBlog.getBlogCollectionError);
    this.errorMessage$ = this.store.select(fromBlog.getBlogCollectionErrorMessage);
    this.posts$ = this.store.select(fromBlog.getBlogCollectionEntities);
  }

  ngOnInit() {
    this.store.dispatch(new blogActions.LoadPosts(0));
  }

}
