import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketAddComponent} from './ticket-add/ticket-add.component';
import {TicketUpdateComponent} from './ticket-update/ticket-update.component';
import {TicketAdminPrioriteComponent} from './ticket-admin-priorite/ticket-admin-priorite.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion des tickets'
    },
    children: [
      {
        path: '',
        redirectTo: 'index'
      },
      {
        path: 'index',
        component: TicketIndexComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'add',
        component: TicketAddComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'update',
        component: TicketUpdateComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'priorité',
        component: TicketAdminPrioriteComponent,
        data: {
          title: 'Cards'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}
