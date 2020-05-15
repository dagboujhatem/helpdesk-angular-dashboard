import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiketsService {

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

  // Add a ticket from the REST API
  addTicket(ticketData) {
   return  this.http.post(this.url + 'tickets', ticketData);
  }

  // Update a ticket from the REST API
  updateTicket(ticketID , ticketNewData) {
    return this.http.post(this.url + 'tickets/' + ticketID, ticketNewData);
  }

  // Add priorité to the ticket
  addPrioriteToTicket(ticketId, priorite: string) {
    return this.http.put(this.url + 'tickets/priorite/' + ticketId , { priorite : priorite });
  }
  // Get all avis from the REST API
  getAllAvis() {
    return this.http.get(this.url + 'tickets');
  }
   // Get avis by ID from the REST API
   getavisById(id) {
    return this.http.get(this.url + 'tickets/' + id);
  }
}
