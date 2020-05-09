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
  getMissions() {
    return this.http.get(this.url + 'missions');
  }

  // Get mission by ID from the REST API
  getMissionById (id) {
    return this.http.get(this.url + 'missions/' + id);
  }

  // Add a mission from the REST API
  addMission(MissionData) {
   return  this.http.post(this.url + 'missions', MissionData);
  }

  // Update a mission from the REST API
  updateMission(MissionReponseID , MissionReponseNewData) {
    return this.http.post(this.url + 'missions/' + MissionReponseID, MissionReponseNewData);
  }

  // add mission response
  addMissionResponse(MissionResponseData) {
    return  this.http.post(this.url + 'missionResponses', MissionResponseData);
  }
  // confirmer la réponse d'une mission
  confirmerMission(MissionResponseID) {
    return  this.http.get(this.url + 'missionResponses/confirmer/' + MissionResponseID);
  }
}
