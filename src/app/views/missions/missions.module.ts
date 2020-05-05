import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MissionAddComponent} from './mission-add/mission-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Import routing module
import { MissionsRoutingModule } from './missions-routing.module';
import { MissionIndexComponent } from './mission-index/mission-index.component';
import { MissionReponseComponent } from './mission-reponse/mission-reponse.component';
import { MissionConfirmerComponent } from './mission-confirmer/mission-confirmer.component';
import { IndexMissionFournisseurComponent } from './index-mission-fournisseur/index-mission-fournisseur.component';

@NgModule({
  declarations: [
    MissionAddComponent,
    MissionIndexComponent,
    MissionReponseComponent,
    MissionConfirmerComponent,
    IndexMissionFournisseurComponent
  ],
  imports: [
    CommonModule,
    MissionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MissionsModule { }
