import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccesService {

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // Get all users from the REST API
  getAllUsers() {
    return this.http.get(this.url + 'users');
  }

  // Get user by ID from the REST API
  getUserById(id) {
    return this.http.get(this.url + 'users/' + id);
  }

  // Add a user from the REST API
  addUser(userData: FormData) {
    return this.http.post(this.url + 'users',
      userData);
  }

  // Update a user from the REST API
  updateUser(userID , userNewData: FormData) {
    return this.http.post(this.url + 'users/' + userID, userNewData);
  }

  // Delete a user from the REST API
  deleteUser(userID) {
    return this.http.delete(this.url + 'users/' + userID);
  }
}
