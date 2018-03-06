import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@users/reducers/index';

import { CollectionEffects } from '@users/effects/collection';

import { UsersRoutingModule } from '@users/users-routing.module';
import { UsersIndexContainerComponent } from '@users/containers/users-index-container/users-index-container.component';

import { UsersService } from '@users/services/users.service';
import { UsersListComponent } from '@users/components/users-list/users-list.component';
import { UsersShowContainerComponent } from '@users/containers/users-show-container/users-show-container.component';
import { UsersProfileComponent } from '@users/components/users-profile/users-profile.component';

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
    UsersListComponent,
    UsersShowContainerComponent,
    UsersProfileComponent
  ],
  exports: [
    UsersIndexContainerComponent,
    UsersShowContainerComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
