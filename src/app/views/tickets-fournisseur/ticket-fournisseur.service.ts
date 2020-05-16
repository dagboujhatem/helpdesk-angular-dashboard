import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketFournisseurService {

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

  // ajouter la réponse du fournisseur (relative à une ticket)
  addTicketResponse(ticketResponseData) {
    return this.http.post(this.url + 'ticketResponses', ticketResponseData);
  }
}
