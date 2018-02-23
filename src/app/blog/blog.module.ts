import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers/index';

import { CollectionEffects } from './effects/collection';
import { LoggerEffects } from './effects/logging';
import { RefreshingEffects } from './effects/refreshing';

import { PostsService } from './services/posts.service';
import { LoggingService } from './services/logging.service';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogIndexContainerComponent } from './containers/blog-index-container/blog-index-container.component';
import { BlogShowContainerComponent } from './containers/blog-show-container/blog-show-container.component';
import { BlogArchiveContainerComponent } from './containers/blog-archive-container/blog-archive-container.component';
//
import { LastPostHeroComponent } from './components/last-post-hero/last-post-hero.component';
import { PostsToolbarComponent } from './components/posts-toolbar/posts-toolbar.component';
import { CategoryToolbarComponent } from './components/category-toolbar/category-toolbar.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsSingleComponent } from './components/posts-single/posts-single.component';
import { ArchiveListComponent } from './components/archive-list/archive-list.component';
import { PostsCommentsComponent } from './components/posts-comments/posts-comments.component';
import { WriteCommentsComponent } from './components/write-comments/write-comments.component';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('blog', reducers),
    EffectsModule.forFeature([CollectionEffects, RefreshingEffects, LoggerEffects]),
    BlogRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    BlogIndexContainerComponent,
    LastPostHeroComponent,
    PostsToolbarComponent,
    CategoryToolbarComponent,
    PostsListComponent,
    BlogShowContainerComponent,
    PostsSingleComponent,
    BlogArchiveContainerComponent,
    ArchiveListComponent,
    PostsCommentsComponent,
    WriteCommentsComponent
  ],
  exports: [
    BlogIndexContainerComponent,
    LastPostHeroComponent,
    PostsToolbarComponent,
    CategoryToolbarComponent,
    PostsListComponent,
    BlogShowContainerComponent,
    PostsSingleComponent,
    BlogArchiveContainerComponent,
    ArchiveListComponent,
    PostsCommentsComponent,
    WriteCommentsComponent
  ],
  providers: [
    PostsService,
    LoggingService
  ]
})
export class BlogModule { }
