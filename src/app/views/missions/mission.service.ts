import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // Get all  missions materiels from the REST API
  getMissionReponse() {
    return this.http.get(this.url + 'missions');
  }

  // Get mission by ID from the REST API
  getMissionReponseById (id) {
    return this.http.get(this.url + 'missions/' + id);
  }

  // Add a mission from the REST API
  addMissionReponse(MissionReponseData) {
   return  this.http.post(this.url + 'missions', MissionReponseData);
  }

  // Update a mission from the REST API
  updateMissionReponse(MissionReponseID , MissionReponseNewData) {
    return this.http.put(this.url + 'missions/' + MissionReponseID, MissionReponseNewData);
  }

  // Delete a mission from the REST API
  deleteMissionReponse(MissionReponseID) {
    return this.http.delete(this.url + 'missions/' + MissionReponseID);
  }
}
