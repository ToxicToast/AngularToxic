import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@blog/reducers/index';

import { CollectionEffects } from '@blog/effects/collection';
import { LoggerEffects } from '@blog/effects/logging';
import { RefreshingEffects } from '@blog/effects/refreshing';

import { PostsService } from '@blog/services/posts.service';
import { LoggingService } from '@blog/services/logging.service';

import { BlogRoutingModule } from '@blog/blog-routing.module';
import { BlogIndexContainerComponent } from '@blog/containers/blog-index-container/blog-index-container.component';
import { BlogShowContainerComponent } from '@blog/containers/blog-show-container/blog-show-container.component';
import { BlogArchiveContainerComponent } from '@blog/containers/blog-archive-container/blog-archive-container.component';
//
import { LastPostHeroComponent } from '@blog/components/last-post-hero/last-post-hero.component';
import { PostsToolbarComponent } from '@blog/components/posts-toolbar/posts-toolbar.component';
import { CategoryToolbarComponent } from '@blog/components/category-toolbar/category-toolbar.component';
import { PostsListComponent } from '@blog/components/posts-list/posts-list.component';
import { PostsSingleComponent } from '@blog/components/posts-single/posts-single.component';
import { ArchiveListComponent } from '@blog/components/archive-list/archive-list.component';
import { PostsCommentsComponent } from '@blog/components/posts-comments/posts-comments.component';
import { WriteCommentsComponent } from '@blog/components/write-comments/write-comments.component';



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
