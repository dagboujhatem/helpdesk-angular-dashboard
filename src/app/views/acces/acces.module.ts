import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccesRoutingModule} from './acces-routing.module';
import {AccesIndexComponent} from './acces-index/acces-index.component';
import {AccesAddComponent} from './acces-add/acces-add.component';
import {AccesUpdateComponent} from './acces-update/acces-update.component';
import {DataTablesModule} from 'angular-datatables';
import {FileUploadModule} from 'ng2-file-upload';
import { AccesShowComponent } from './acces-show/acces-show.component';



@NgModule({
  declarations: [
    AccesIndexComponent,
    AccesAddComponent,
    AccesUpdateComponent,
    AccesShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccesRoutingModule,
    DataTablesModule,
    FileUploadModule
  ]
})
export class AccesModule { }
