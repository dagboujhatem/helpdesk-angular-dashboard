import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
// Import routing module
import {SettingsRoutingModule} from './settings-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';

@NgModule({
  declarations: [ProfileSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
