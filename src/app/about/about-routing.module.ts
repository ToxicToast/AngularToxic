import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { UsersIndexContainerComponent } from './containers/users-index-container/users-index-container.component';

const routes: Routes = [
 // { path: '', component: UsersIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
