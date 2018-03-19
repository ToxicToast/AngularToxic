import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@users/reducers/index';

import { CollectionEffects } from '@users/effects/collection';
import { LoggerEffects } from '@users/effects/logging';

import { UsersRoutingModule } from '@users/users-routing.module';
import { UsersIndexContainerComponent } from '@users/containers/users-index-container/users-index-container.component';

import { UsersService } from '@users/services/users.service';
import { LoggingService } from '@users/services/logging.service';

import { UsersListComponent } from '@users/components/users-list/users-list.component';
import { UsersShowContainerComponent } from '@users/containers/users-show-container/users-show-container.component';
import { UsersProfileComponent } from '@users/components/users-profile/users-profile.component';
import { UserAchievementsComponent } from '@users/components/user-achievements/user-achievements.component';
import { UsersStreamComponent } from '@users/components/users-stream/users-stream.component';
import { UsersGroupsComponent } from '@users/components/users-groups/users-groups.component';
import { UsersToolbarComponent } from '@users/components/users-toolbar/users-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([CollectionEffects, LoggerEffects]),
    UsersRoutingModule,
    CoreModule
  ],
  declarations: [
    UsersIndexContainerComponent,
    UsersListComponent,
    UsersShowContainerComponent,
    UsersProfileComponent,
    UserAchievementsComponent,
    UsersStreamComponent,
    UsersGroupsComponent,
    UsersToolbarComponent,
  ],
  exports: [
    UsersIndexContainerComponent,
    UsersShowContainerComponent
  ],
  providers: [
    UsersService,
    LoggingService
  ]
})
export class UsersModule { }
