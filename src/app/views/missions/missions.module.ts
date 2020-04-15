import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MissionComponent} from './mission/mission.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Import routing module
import { MissionsRoutingModule } from './missions-routing.module';

@NgModule({
  declarations: [
    MissionComponent
  ],
  imports: [
    CommonModule,
    MissionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MissionsModule { }
