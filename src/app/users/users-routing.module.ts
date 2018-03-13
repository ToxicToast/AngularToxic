import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersIndexContainerComponent } from '@users/containers/users-index-container/users-index-container.component';
import { UsersShowContainerComponent } from '@users/containers/users-show-container/users-show-container.component';

const routes: Routes = [
  { path: '', component: UsersIndexContainerComponent },
  { path: 'users/:id', component: UsersShowContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
