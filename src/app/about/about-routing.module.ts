import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutIndexContainerComponent } from '@about/containers/about-index-container/about-index-container.component';

const routes: Routes = [
 { path: '', component: AboutIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
