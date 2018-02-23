import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    CoreModule
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class AboutModule { }
