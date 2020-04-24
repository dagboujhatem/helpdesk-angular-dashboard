import { Injectable } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiketsService {

  
  uploader: FileUploader;
  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // Get all tickets from the REST API
  getAlLTickets() {
    return this.http.get(this.url + 'tickets');
  }

  // Get ticket by ID from the REST API
  getTicketById(id) {
    return this.http.get(this.url + 'tickets/' + id);
  }

  // Add a ticket from the REST API
  addTicket(ticketData) {
    this.uploader = new FileUploader({
      url: this.url + 'tickets',
      additionalParameter: ticketData
    });

   return this.uploader.response;
  }

  // Update a ticket from the REST API
  updateTicket(ticketID , ticketNewData) {
    return this.http.put(this.url + 'tickets/' + ticketID, ticketNewData);
  }

  // Delete a ticket from the REST API
  deleteTicket(ticketID) {
    return this.http.delete(this.url + 'tickets/' + ticketID);
  }
}
