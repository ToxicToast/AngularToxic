import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './containers/layout-container/layout-container.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { WarningComponent } from './components/warning/warning.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { LoggedComponent } from './Components/logged/logged.component';
import { LoginComponent } from './Components/login/login.component';

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
  ]
})
export class CoreModule { }
