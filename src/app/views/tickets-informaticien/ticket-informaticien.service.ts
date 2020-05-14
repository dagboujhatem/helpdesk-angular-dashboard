import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketInformaticienService {

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // Get all tickets from the REST API
  getAllTickets() {
    return this.http.get(this.url + 'tickets');
  }

  // Get ticket by ID from the REST API
  getTicketById(id) {
    return this.http.get(this.url + 'tickets/' + id);
  }

  // ajouter un réponse à un ticket materiel
  addTicketMaterielResponse(ticketResponseData) {
    return this.http.post(this.url + 'ticketResponse', ticketResponseData);
  }

  // ajouter un réponse à un ticket applicatif
  addTicketApplicatifResponse(ticketResponseData) {
    return this.http.post(this.url + 'ticketResponse', ticketResponseData);
  }
}
