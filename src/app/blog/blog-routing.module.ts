import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogIndexContainerComponent } from './containers/blog-index-container/blog-index-container.component';
import { BlogShowContainerComponent } from './containers/blog-show-container/blog-show-container.component';
import { BlogArchiveContainerComponent } from './containers/blog-archive-container/blog-archive-container.component';

const routes: Routes = [
  { path: '', component: BlogIndexContainerComponent },
  { path: 'blog/archive', component: BlogArchiveContainerComponent },
  { path: 'blog/:id', component: BlogShowContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
