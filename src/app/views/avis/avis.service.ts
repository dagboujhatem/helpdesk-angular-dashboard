import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // Get all avis from the REST API
  getAllAvis() {
    return this.http.get(this.url + 'ticketAvis');
  }

  // Get avis by ID from the REST API
  getAvistById(id) {
    return this.http.get(this.url + 'ticketAvis/' + id);
  }
}
