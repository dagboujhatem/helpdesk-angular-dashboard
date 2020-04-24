import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post(this.url + 'login', credentials );
  }

  logout() {
    return this.http.get(this.url + 'users/logout');
  }

  forgetPassword(email: string) {
    return this.http.post(this.url + 'forgot-password', {email: email});
  }

  resetPassword(newPassword: string, accessToken: string) {
    return this.http.post(this.url + 'reset-password', {
      newPassword: newPassword,
      accessToken: accessToken
    });
  }
}
