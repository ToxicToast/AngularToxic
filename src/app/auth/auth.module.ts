import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@auth/reducers/index';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { AuthLoginContainerComponent } from '@auth/containers/auth-login-container/auth-login-container.component';
import { LoginFormComponent } from '@auth/components/login-form/login-form.component';
import { AuthRegisterContainerComponent } from '@auth/containers/auth-register-container/auth-register-container.component';
import { RegisterFormComponent } from '@auth/components/register-form/register-form.component';

import { AuthService } from '@auth/services/auth.service';

import { RegisterEffects } from '@auth/effects/register';
import { LoginEffects } from '@auth/effects/login';

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
