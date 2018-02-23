import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromBlog from '../../reducers/index';
import * as blogActions from '../../actions/blog-actions';

@Component({
  selector: 'toxic-blog-show-container',
  templateUrl: './blog-show-container.component.html',
  styleUrls: ['./blog-show-container.component.scss']
})
export class BlogShowContainerComponent implements OnInit, OnDestroy {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  posts$: Observable<any[]>;
  commentsState$: Observable<any>;
  comments$: Observable<any[]>;
  commentsLoading$: Observable<boolean>;
  private postId: number;
  private sub: any;


  constructor(
    private store: Store<fromBlog.State>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loading$ = this.store.select(fromBlog.getBlogCollectionLoading);
    this.loaded$ = this.store.select(fromBlog.getBlogCollectionLoaded);
    this.error$ = this.store.select(fromBlog.getBlogCollectionError);
    this.errorMessage$ = this.store.select(fromBlog.getBlogCollectionErrorMessage);
    this.posts$ = this.store.select(fromBlog.getBlogCollectionEntities);
    this.comments$ = this.store.select(fromBlog.getBlogCommentsEntities);
    this.commentsLoading$ = this.store.select(fromBlog.getBlogCommentsLoading);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.store.dispatch(new blogActions.LoadPosts(this.postId));
      this.store.dispatch(new blogActions.LoadComments(this.postId));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSaveComment(payload) {
    this.store.dispatch(new blogActions.AddComments(payload));
  }

}
