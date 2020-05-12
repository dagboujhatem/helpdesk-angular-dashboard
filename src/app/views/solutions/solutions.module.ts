import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {SolutionsRoutingModule} from './solutions-routing.module';
import {SolutionApplicatifIndexComponent} from './solution-applicatif-index/solution-applicatif-index.component';
import {SolutionMaterielIndexComponent} from './solution-materiel-index/solution-materiel-index.component';
import {SolutionMaterielShowComponent} from './solution-materiel-show/solution-materiel-show.component';
import {SolutionApplicatifShowComponent} from './solution-applicatif-show/solution-applicatif-show.component';



@NgModule({
  declarations: [
    SolutionApplicatifIndexComponent,
    SolutionMaterielIndexComponent,
    SolutionMaterielShowComponent,
    SolutionApplicatifShowComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SolutionsRoutingModule,
    DataTablesModule
  ]
})
export class SolutionsModule { }
