import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketReponseFournisseurComponent} from './ticket-reponse-fournisseur/ticket-reponse-fournisseur.component';
import {TicketIndexFournisseurComponent} from './ticket-index-fournisseur/ticket-index-fournisseur.component';
import {TicketsFournisseurRoutingModule} from './tickets-fournisseur-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    TicketReponseFournisseurComponent,
    TicketIndexFournisseurComponent,
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
