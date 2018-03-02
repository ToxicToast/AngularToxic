import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogIndexContainerComponent } from '@blog/containers/blog-index-container/blog-index-container.component';
import { BlogShowContainerComponent } from '@blog/containers/blog-show-container/blog-show-container.component';
import { BlogArchiveContainerComponent } from '@blog/containers/blog-archive-container/blog-archive-container.component';

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
