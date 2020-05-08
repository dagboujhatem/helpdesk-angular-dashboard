import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MissionAddComponent} from './mission-add/mission-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Import routing module
import { MissionsRoutingModule } from './missions-routing.module';
import { MissionIndexComponent } from './mission-index/mission-index.component';
import { MissionReponseComponent } from './mission-reponse/mission-reponse.component';
import { MissionConfirmerComponent } from './mission-confirmer/mission-confirmer.component';
import {DataTablesModule} from 'angular-datatables';
import { MissionShowComponent } from './mission-show/mission-show.component';
import { MissionUpdateComponent } from './mission-update/mission-update.component';

@NgModule({
  declarations: [
    MissionAddComponent,
    MissionIndexComponent,
    MissionReponseComponent,
    MissionConfirmerComponent,
    MissionShowComponent,
    MissionUpdateComponent
  ],
  imports: [
    CommonModule,
    MissionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class MissionsModule { }
