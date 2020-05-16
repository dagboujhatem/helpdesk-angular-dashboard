import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvisRoutingModule} from './avis-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {AvisIndexComponent} from './avis-index/avis-index.component';
import {AvisShowComponent} from './avis-show/avis-show.component';



@NgModule({
  declarations: [
    AvisIndexComponent,
    AvisShowComponent,
  ],
  imports: [
    CommonModule,
    AvisRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class AvisModule { }
