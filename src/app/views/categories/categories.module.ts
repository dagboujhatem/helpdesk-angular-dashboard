import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components Routing
import { CategoriesRoutingModule } from './categories-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { CategorieApplicatifAddComponent } from './categorie-applicatif-add/categorie-applicatif-add.component';
import { CategorieApplicatifIndexComponent } from './categorie-applicatif-index/categorie-applicatif-index.component';
import { CategorieMaterielIndexComponent } from './categorie-materiel-index/categorie-materiel-index.component';
import { CategorieMaterielAddComponent } from './categorie-materiel-add/categorie-materiel-add.component';

@NgModule({
  declarations: [
    CategorieApplicatifAddComponent,
    CategorieApplicatifIndexComponent,
    CategorieMaterielIndexComponent,
    CategorieMaterielAddComponent
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
