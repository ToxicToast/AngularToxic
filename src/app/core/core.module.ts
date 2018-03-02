import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from '@core/containers/layout-container/layout-container.component';
import { NavigationComponent } from '@core/components/navigation/navigation.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { LoadingComponent } from '@core/components/loading/loading.component';
import { ErrorComponent } from '@core/components/error/error.component';
import { WarningComponent } from '@core/components/warning/warning.component';
import { BreadcrumbsComponent } from '@core/components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { LoggedComponent } from '@core/components/logged/logged.component';
import { LoginComponent } from '@core/components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LayoutContainerComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoadingComponent,
    ErrorComponent,
    WarningComponent,
    BreadcrumbsComponent,
    LoggedComponent,
    LoginComponent,
  ],
  exports: [
    LayoutContainerComponent,
    NotFoundComponent,
    LoadingComponent,
    ErrorComponent,
    WarningComponent,
    BreadcrumbsComponent
  ],
  providers: [

  ]
})
export class CoreModule { }
