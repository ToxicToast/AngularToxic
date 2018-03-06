import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginContainerComponent } from '@auth/containers/auth-login-container/auth-login-container.component';
import { AuthRegisterContainerComponent } from '@auth/containers/auth-register-container/auth-register-container.component';

const routes: Routes = [
  { path: 'auth/login', component: AuthLoginContainerComponent },
  { path: 'auth/register', component: AuthRegisterContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
