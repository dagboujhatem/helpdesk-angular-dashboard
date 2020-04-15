import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components Routing
import { CategoriesRoutingModule } from './categories-routing.module';
import {CategorieAddComponent} from './categorie-add/categorie-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    CategorieAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    DataTablesModule
  ]
})
export class CategoriesModule { }
