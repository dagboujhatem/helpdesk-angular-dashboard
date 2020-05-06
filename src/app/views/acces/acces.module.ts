import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccesRoutingModule} from './acces-routing.module';
import {AccesIndexComponent} from './acces-index/acces-index.component';
import {AccesAddComponent} from './acces-add/acces-add.component';
import {AccesUpdateComponent} from './acces-update/acces-update.component';
import {DataTablesModule} from 'angular-datatables';
import { AccesShowComponent } from './acces-show/acces-show.component';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SweetAlertService } from 'angular-sweetalert-service';

@NgModule({
  declarations: [
    AccesIndexComponent,
    AccesAddComponent,
    AccesUpdateComponent,
    AccesShowComponent,
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    AccesRoutingModule,
    DataTablesModule
  ],
  providers: [
      SweetAlertService
  ],
})
export class AccesModule { }
