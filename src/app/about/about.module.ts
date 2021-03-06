import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@about/reducers/index';

import { CollectionEffects } from '@about/effects/collection';

import { AboutRoutingModule } from '@about/about-routing.module';
import { AboutIndexContainerComponent } from '@about/containers/about-index-container/about-index-container.component';
import { AboutToxicComponent } from '@about/components/about-toxic/about-toxic.component';

import { AboutService } from '@about/services/about.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('about', reducers),
    EffectsModule.forFeature([CollectionEffects]),
    AboutRoutingModule,
    CoreModule
  ],
  declarations: [
    AboutIndexContainerComponent,
    AboutToxicComponent
  ],
  exports: [
    AboutIndexContainerComponent
  ],
  providers: [
    AboutService
  ]
})
export class AboutModule { }
