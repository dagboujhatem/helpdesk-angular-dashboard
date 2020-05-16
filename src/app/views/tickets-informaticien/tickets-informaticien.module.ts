import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {TicketsInformaticienRoutingModule} from './tickets-informaticien-routing.module';
import { TicketReponseComponent } from './ticket-reponse/ticket-reponse.component';
import {TicketReponseShowComponent} from './ticket-reponse-show/ticket-reponse-show.component';

@NgModule({
  declarations: [
    TicketIndexComponent,
    TicketReponseComponent,
    TicketReponseShowComponent
  ],
  imports: [
    CommonModule,
    TicketsInformaticienRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class TicketsInformaticienModule { }
