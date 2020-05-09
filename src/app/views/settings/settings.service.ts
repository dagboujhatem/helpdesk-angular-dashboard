import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // pour ne pas  écrire tjrs environment.serveurUrl
  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // get user information from the REST API
  getInfos(email) {
    return this.http.get(this.url + 'users/getInfos/' + email);
  }

  // Save new info in the REST API
  saveInfo(email, userInfoUpdated) {
    return this.http.post(this.url + 'users/saveInfos/' + email, userInfoUpdated);
  }
}
