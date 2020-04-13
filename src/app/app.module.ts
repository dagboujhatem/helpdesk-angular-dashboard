import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/common/error/404.component';
import { P500Component } from './views/common/error/500.component';
import { LoginComponent } from './views/common/login/login.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ResetPasswordComponent } from './views/common/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './views/common/forgot-password/forgot-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccesIndexComponent } from './views/acces/acces-index/acces-index.component';
import { AccesAddComponent } from './views/acces/acces-add/acces-add.component';
import { AccesUpdateComponent } from './views/acces/acces-update/acces-update.component';
import { MissionComponent } from './views/mission/mission.component';
import { TicketIndexComponent } from './views/ticket/ticket-index/ticket-index.component';
import { TicketAddComponent } from './views/ticket/ticket-add/ticket-add.component';
import { TicketAdminPrioriteComponent } from './views/ticket/ticket-admin-priorite/ticket-admin-priorite.component';
import { TicketUpdateComponent } from './views/ticket/ticket-update/ticket-update.component';
import { CategorieAddComponent } from './views/categorie/categorie-add/categorie-add.component';
import { CommonRightColComponent } from './views/common/common-right-col/common-right-col.component';
import {ToasterModule} from 'angular2-toaster';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule.forRoot(),
    DataTablesModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    AccesIndexComponent,
    AccesAddComponent,
    AccesUpdateComponent,
    MissionComponent,
    TicketIndexComponent,
    TicketAddComponent,
    TicketAdminPrioriteComponent,
    TicketUpdateComponent,
    CategorieAddComponent,
    CommonRightColComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
