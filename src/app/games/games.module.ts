import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '@core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@games/reducers/index';

import { CollectionEffects } from '@games/effects/collection';

import { GamesService } from '@games/services/games.service';

import { GamesRoutingModule } from '@games/games-routing.module';
import { GamesIndexContainerComponent } from '@games/containers/games-index-container/games-index-container.component';
import { GamesListComponent } from '@games/components/games-list/games-list.component';
import { GamesToolbarComponent } from '@games/components/games-toolbar/games-toolbar.component';
import { GamesIndexLayoutComponent } from '@games/containers/games-index-layout/games-index-layout.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GamesRoutingModule,
    StoreModule.forFeature('games', reducers),
    EffectsModule.forFeature([CollectionEffects]),
    CoreModule
  ],
  declarations: [
    GamesIndexContainerComponent,
    GamesListComponent,
    GamesToolbarComponent,
    GamesIndexLayoutComponent
  ],
  providers: [
    GamesService
  ]
})
export class GamesModule { }
