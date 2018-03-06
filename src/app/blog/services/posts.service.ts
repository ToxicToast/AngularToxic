import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions, Response } from '@angular/http';

import { Store } from '@ngrx/store';

import { environment } from '@env/environment';

import * as collection from '@blog/actions/blog-actions';
import * as fromBlog from '@blog/reducers/index';

@Injectable()
export class PostsService {
  private baseUrl;

  constructor(
    private http: HttpClient,
    private store: Store<fromBlog.State>,
  ) {
    this.baseUrl = environment.api.blog;
  }

  switchPost(loadPosts) {
    const { payload } = loadPosts;
    if (payload > 0) {
      return this.getPost(payload);
    }
    return this.getPosts();
  }

  getPosts() {
    const endpoint = '/blog';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

  getPost(id) {
    const endpoint = '/blog';
    const url = `${this.baseUrl}${endpoint}/${id}`;
    return this.http.get(url);
  }

  getLastPost() {
    const endpoint = '/blog/last';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

  getCategories() {
    const endpoint = '/blog/categories';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

  getCategoryPosts(data) {
    const { payload } = data;
    const endpoint = '/blog/category';
    const url = `${this.baseUrl}${endpoint}/${payload}`;
    return this.http.get(url);
  }

  getComments(data) {
    const { payload } = data;
    const endpoint = '/blog/comments';
    const url = `${this.baseUrl}${endpoint}/${payload}`;
    return this.http.get(url);
  }

  addComments(data) {
    const { payload } = data;
    const endpoint = '/blog/comments/add';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.post(url, payload);
  }

  refreshPosts() {
    this.store.dispatch(new collection.LoadPosts(0));
    this.store.dispatch(new collection.LoadLastPost());
  }

  refreshComments(actionPayload) {
    const { payload } = actionPayload;
    const { post_id } = payload;
    this.store.dispatch(new collection.LoadComments(post_id));
  }
}
