import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesIndexContainerComponent } from '@games/containers/games-index-container/games-index-container.component';

const routes: Routes = [
  { path: '', component: GamesIndexContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
