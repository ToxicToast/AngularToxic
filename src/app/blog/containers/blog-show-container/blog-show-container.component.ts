import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PostModel } from '@blog/models/post.model';
import { CommentModel } from '@blog/models/comment.model';

import { Store } from '@ngrx/store';

import * as fromBlog from '@blog/reducers/index';
import * as blogActions from '@blog/actions/blog-actions';

import * as fromAuth from '@auth/reducers/index';
import * as authActions from '@auth/actions/auth-actions';

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
  posts$: Observable<PostModel[]>;
  commentsState$: Observable<any>;
  comments$: Observable<CommentModel[]>;
  commentsLoading$: Observable<boolean>;
  loggedUser$: Observable<any[]>;
  private postId: number;
  private sub: any;


  constructor(
    private store: Store<fromBlog.State>,
    private authStore: Store<fromAuth.State>,
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
    //
    this.loggedUser$ = this.store.select(fromAuth.getAuthLoginEntity);
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
