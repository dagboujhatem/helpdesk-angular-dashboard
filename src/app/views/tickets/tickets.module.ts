import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketAddComponent} from './ticket-add/ticket-add.component';
import {TicketUpdateComponent} from './ticket-update/ticket-update.component';
import {TicketPrioriteComponent} from './ticket-priorite/ticket-priorite.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Import routing module
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketShowComponent } from './ticket-show/ticket-show.component';
import {DataTablesModule} from 'angular-datatables';
import { TicketRelanceComponent } from './ticket-relance/ticket-relance.component';
import { AvisAddComponent } from './avis-add/avis-add.component';
import { TicketReponseShowComponent } from './ticket-reponse-show/ticket-reponse-show.component';

@NgModule({
  declarations: [
    TicketIndexComponent,
    TicketAddComponent,
    TicketUpdateComponent,
    TicketPrioriteComponent,
    TicketShowComponent,
    TicketRelanceComponent,
    AvisAddComponent,
    TicketReponseShowComponent,
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class TicketsModule { }
