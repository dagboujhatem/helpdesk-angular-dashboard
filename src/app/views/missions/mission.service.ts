import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
// pour ne pas  écrire tjrs environment.serveurUrl
  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // méthode  Get all  missions  from the REST API
  getMissionReponse() {
    return this.http.get(this.url + 'missions');
  }

  // Get mission by ID from the REST API
  getMissionReponseById (id) {
    return this.http.get(this.url + 'missions/' + id);
  }

  // Add a mission from the REST API
  addMissionReponse(MissionData) {
   return  this.http.post(this.url + 'missions', MissionData);
  }

  // Update a mission from the REST API
  updateMissionReponse(MissionReponseID , MissionReponseNewData) {
    return this.http.post(this.url + 'missions/' + MissionReponseID, MissionReponseNewData);
  }
}
