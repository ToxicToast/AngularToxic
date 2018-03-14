import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from '@core/reducers/index';
import { CustomRouterStateSerializer } from '@core/utils/RouterState';

import { CoreModule } from '@core/core.module';
import { BlogModule } from '@blog/blog.module';
import { AuthModule } from '@auth/auth.module';
import { UsersModule } from '@users/users.module';
import { GamesModule } from '@games/games.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '@env/environment';

import { AuthInterceptor } from '@core/interceptors/auth';

const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument() : [];
const RouterProvider = { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([]),
    StoreDevTools,
    CoreModule,
    BlogModule,
    AuthModule,
    UsersModule,
    GamesModule,
    ReactiveFormsModule
  ],
  providers: [
    RouterProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
