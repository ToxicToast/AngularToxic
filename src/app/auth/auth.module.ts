import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers/index';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginContainerComponent } from './containers/auth-login-container/auth-login-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthRegisterContainerComponent } from './containers/auth-register-container/auth-register-container.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { AuthService } from './services/auth.service';

import { RegisterEffects } from './effects/register';
import { LoginEffects } from './effects/login';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffects, LoginEffects]),
    AuthRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthLoginContainerComponent,
    LoginFormComponent,
    AuthRegisterContainerComponent,
    RegisterFormComponent
  ],
  exports: [
    AuthLoginContainerComponent,
    AuthRegisterContainerComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
