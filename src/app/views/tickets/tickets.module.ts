import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketAddComponent} from './ticket-add/ticket-add.component';
import {TicketUpdateComponent} from './ticket-update/ticket-update.component';
import {TicketAdminPrioriteComponent} from './ticket-admin-priorite/ticket-admin-priorite.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Import routing module
import { TicketsRoutingModule } from './tickets-routing.module';

@NgModule({
  declarations: [
    TicketIndexComponent,
    TicketAddComponent,
    TicketUpdateComponent,
    TicketAdminPrioriteComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TicketsModule { }
