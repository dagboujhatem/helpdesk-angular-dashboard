import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {FileUploader} from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})
export class AccesService {

  uploader: FileUploader;
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
  addUser(userData) {
    this.uploader = new FileUploader({
      url: this.url + 'users',
      additionalParameter:  userData
    });

   return this.uploader.response;
  }

  // Update a user from the REST API
  updateUser(userID , userNewData) {
    return this.http.put(this.url + 'users/' + userID, userNewData);
  }

  // Delete a user from the REST API
  deleteUser(userID) {
    return this.http.delete(this.url + 'users/' + userID);
  }
}
