import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from '@core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '404', component: NotFoundComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', loadChildren: '@blog/blog.module#BlogModule', pathMatch: 'full' },
  { path: 'auth', loadChildren: '@auth/auth.module#AuthModule', pathMatch: 'full' },
  { path: 'users', loadChildren: '@users/users.module#UsersModule', pathMatch: 'full' },
  { path: 'about', loadChildren: '@about/about.module#AboutModule', pathMatch: 'full' },
  { path: 'games', loadChildren: '@games/games.module#GamesModule', pathMatch: 'full' },
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
