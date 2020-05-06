import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileSettingsComponent} from './profile-settings/profile-settings.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsComponent,
    data: {
      title: 'Paramètres de mon compte'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
