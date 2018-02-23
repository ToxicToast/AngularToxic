import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutIndexContainerComponent } from './containers/about-index-container/about-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    CoreModule
  ],
  declarations: [
    AboutIndexContainerComponent
  ],
  exports: [
    AboutIndexContainerComponent
  ],
  providers: []
})
export class AboutModule { }
