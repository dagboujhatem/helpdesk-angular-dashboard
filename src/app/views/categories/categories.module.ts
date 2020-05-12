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
import { CategorieApplicatifUpdateComponent } from './categorie-applicatif-update/categorie-applicatif-update.component';
import { CategorieApplicatifShowComponent } from './categorie-applicatif-show/categorie-applicatif-show.component';
import { CategorieMaterielUpdateComponent } from './categorie-materiel-update/categorie-materiel-update.component';
import { CategorieMaterielShowComponent } from './categorie-materiel-show/categorie-materiel-show.component';

@NgModule({
  declarations: [
    CategorieApplicatifAddComponent,
    CategorieApplicatifIndexComponent,
    CategorieMaterielIndexComponent,
    CategorieMaterielAddComponent,
    CategorieApplicatifUpdateComponent,
    CategorieApplicatifShowComponent,
    CategorieMaterielUpdateComponent,
    CategorieMaterielShowComponent,
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
