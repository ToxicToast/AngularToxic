import { Action } from '@ngrx/store';

export enum BlogActionTypes {
  LOAD_POSTS = '[Blog] Load Posts',
  LOAD_POSTS_SUCCESS = '[Blog] Successfully loaded Posts',
  LOAD_POSTS_FAILURE = '[Blog] Failed loading Posts',
  //
  LOAD_LASTPOST = '[Blog] Load Last Post',
  LOAD_LASTPOST_SUCCESS = '[Blog] Successfully loaded Last Post',
  LOAD_LASTPOST_FAILURE = '[Blog] Failed loading Last Post',
  //
  LOAD_CATEGORIES = '[Blog] Load Categories',
  LOAD_CATEGORIES_SUCCESS = '[Blog] Successfully loaded Categories',
  LOAD_CATEGORIES_FAILURE = '[Blog] Failed loading Categories',
  //
  LOAD_COMMENTS = '[Blog] Load Comments',
  LOAD_COMMENTS_SUCCESS = '[Blog] Successfully loaded Comments',
  LOAD_COMMENTS_FAILURE = '[Blog] Failed loading Comments',

  ADD_COMMENTS = '[Blog] Add Comments',
  ADD_COMMENTS_SUCCESS = '[Blog] Successfully added Comments',
  ADD_COMMENTS_FAILURE = '[Blog] Failed adding Comments',
  //
  REFRESH_POSTS = '[Blog] Refresh Posts',
  REFRESH_COMMENTS = '[Blog] Refresh Comments',
  //
  CHANGE_PAGE = '[Blog] Change Page',
  CHANGE_VIEW = '[Blog] Change View',
  CHANGE_CATEGORY = '[Blog] Change Category',
}

export class LoadCategories implements Action {
  readonly type = BlogActionTypes.LOAD_CATEGORIES;
  // constructor(public payload: number) {}
}

export class LoadCategoriesSuccess implements Action {
  readonly type = BlogActionTypes.LOAD_CATEGORIES_SUCCESS;
  constructor(public payload: any|any[]) {}
}

export class LoadCategoriesFailure implements Action {
  readonly type = BlogActionTypes.LOAD_CATEGORIES_FAILURE;
  constructor(public payload: string) {}
}

export class LoadPosts implements Action {
  readonly type = BlogActionTypes.LOAD_POSTS;
  constructor(public payload: number) {}
}

export class LoadPostsSuccess implements Action {
  readonly type = BlogActionTypes.LOAD_POSTS_SUCCESS;
  constructor(public payload: any|any[]) {}
}

export class LoadPostsFailure implements Action {
  readonly type = BlogActionTypes.LOAD_POSTS_FAILURE;
  constructor(public payload: string) {}
}

export class LoadLastPost implements Action {
  readonly type = BlogActionTypes.LOAD_LASTPOST;
}

export class LoadLastPostSuccess implements Action {
  readonly type = BlogActionTypes.LOAD_LASTPOST_SUCCESS;
  constructor(public payload: any|any[]) {}
}

export class LoadLastPostFailure implements Action {
  readonly type = BlogActionTypes.LOAD_LASTPOST_FAILURE;
  constructor(public payload: string) {}
}

export class RefreshPosts implements Action {
  readonly type = BlogActionTypes.REFRESH_POSTS;
}

export class ChangePage implements Action {
  readonly type = BlogActionTypes.CHANGE_PAGE;
  constructor(public payload: number) {}
}

export class ChangeView implements Action {
  readonly type = BlogActionTypes.CHANGE_VIEW;
  constructor(public payload: string) {}
}

export class ChangeCategory implements Action {
  readonly type = BlogActionTypes.CHANGE_CATEGORY;
  constructor(public payload: number) {}
}

export class LoadComments implements Action {
  readonly type = BlogActionTypes.LOAD_COMMENTS;
  constructor(public payload: number) {}
}

export class LoadCommentsSuccess implements Action {
  readonly type = BlogActionTypes.LOAD_COMMENTS_SUCCESS;
  constructor(public payload: any|any[]) {}
}

export class LoadCommentsFailure implements Action {
  readonly type = BlogActionTypes.LOAD_COMMENTS_FAILURE;
  constructor(public payload: string) {}
}

export class AddComments implements Action {
  readonly type = BlogActionTypes.ADD_COMMENTS;
  constructor(public payload: any|any[]) {}
}

export class AddCommentsSuccess implements Action {
  readonly type = BlogActionTypes.ADD_COMMENTS_SUCCESS;
  constructor(public payload: any|any[]) {}
}

export class AddCommentsFailure implements Action {
  readonly type = BlogActionTypes.ADD_COMMENTS_FAILURE;
  constructor(public payload: string) {}
}

export class RefreshComments implements Action {
  readonly type = BlogActionTypes.REFRESH_COMMENTS;
  constructor(public payload: number) {}
}

export type BlogActions = LoadPosts | LoadPostsSuccess | LoadPostsFailure |
  RefreshPosts | ChangePage | ChangeView |
  LoadLastPost | LoadLastPostSuccess | LoadLastPostFailure |
  LoadCategories | LoadCategoriesSuccess | LoadCategoriesFailure |
  ChangeCategory | LoadComments | LoadCommentsSuccess |
  LoadCommentsFailure | AddComments | AddCommentsSuccess | AddCommentsFailure |
  RefreshComments;
