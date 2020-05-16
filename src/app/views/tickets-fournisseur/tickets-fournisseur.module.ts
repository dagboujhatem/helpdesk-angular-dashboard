import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketReponseFournisseurComponent} from './ticket-reponse-fournisseur/ticket-reponse-fournisseur.component';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketsFournisseurRoutingModule} from './tickets-fournisseur-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    TicketReponseFournisseurComponent,
    TicketIndexComponent,
  ],
  imports: [
    CommonModule,
    TicketsFournisseurRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class TicketsFournisseurModule { }
