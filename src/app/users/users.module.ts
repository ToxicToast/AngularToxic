import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers/index';

import { CollectionEffects } from './effects/collection';

import { UsersRoutingModule } from './users-routing.module';
import { UsersIndexContainerComponent } from './containers/users-index-container/users-index-container.component';

import { UsersService } from './services/users.service';
import { UsersListComponent } from './Components/users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([CollectionEffects]),
    UsersRoutingModule,
    CoreModule
  ],
  declarations: [
    UsersIndexContainerComponent,
    UsersListComponent
  ],
  exports: [
    UsersIndexContainerComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
