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
import { TicketRelanceAddComponent } from './ticket-relance-add/ticket-relance-add.component';
import { AvisIndexComponent } from './avis-index/avis-index.component';
import { AvisAddComponent } from './avis-add/avis-add.component';
import { TicketResoluIndexComponent } from './ticket-resolu-index/ticket-resolu-index.component';
import { TicketRelanceIndexComponent } from './ticket-relance-index/ticket-relance-index.component';
import { AvisShowComponent } from './avis-show/avis-show.component';

@NgModule({
  declarations: [
    TicketIndexComponent,
    TicketAddComponent,
    TicketUpdateComponent,
    TicketPrioriteComponent,
    TicketShowComponent,
    TicketRelanceAddComponent,
    AvisIndexComponent,
    AvisAddComponent,
    TicketResoluIndexComponent,
    TicketRelanceIndexComponent,
    AvisShowComponent,
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
