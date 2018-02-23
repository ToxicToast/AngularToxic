import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersModule', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

const options = {
  useHash: true,
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
