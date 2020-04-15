import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccesRoutingModule} from './acces-routing.module';
import {AccesIndexComponent} from './acces-index/acces-index.component';
import {AccesAddComponent} from './acces-add/acces-add.component';
import {AccesUpdateComponent} from './acces-update/acces-update.component';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  declarations: [
    AccesIndexComponent,
    AccesAddComponent,
    AccesUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccesRoutingModule,
    DataTablesModule
  ]
})
export class AccesModule { }
