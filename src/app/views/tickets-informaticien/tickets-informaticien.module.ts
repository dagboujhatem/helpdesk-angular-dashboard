import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TicketIndexRelancerInformaticienComponent} from './ticket-index-relancer-informaticien/ticket-index-relancer-informaticien.component';

import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {TicketsInformaticienRoutingModule} from './tickets-informaticien-routing.module';
import { TicketReponseComponent } from './ticket-reponse/ticket-reponse.component';

@NgModule({
  declarations: [
    TicketIndexRelancerInformaticienComponent,
    TicketIndexComponent,
    TicketReponseComponent,
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
