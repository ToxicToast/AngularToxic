import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutIndexContainerComponent } from './containers/about-index-container/about-index-container.component';
import { AboutToxicComponent } from './components/about-toxic/about-toxic.component';

@NgModule({
  imports: [
    CommonModule,
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
  providers: []
})
export class AboutModule { }
