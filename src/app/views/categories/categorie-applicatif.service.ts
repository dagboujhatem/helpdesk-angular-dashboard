import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieApplicatifService {
  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // Get all categories applicatifs from the REST API
  getAllCategorieApplicatif() {
    return this.http.get(this.url + 'categorieApplicatifs');
  }

  // Get categorie applicatif by ID from the REST API
  getCategorieApplicatifById(id) {
    return this.http.get(this.url + 'categorieApplicatifs/' + id);
  }

  // Add a categorie applicatif from the REST API
  addCategorieApplicatif( categorieApplicatifData) {
   return  this.http.post(this.url + 'categorieApplicatifs', categorieApplicatifData);
  }

  // Update a categorie applicatif  from the REST API
  updateCategorieApplicatif(categorieApplicatifID , categorieApplicatifNewData) {
    return this.http.post(this.url + 'categorieApplicatifs/' + categorieApplicatifID, categorieApplicatifNewData);
  }

  // Delete a categorie applicatif  from the REST API
  deleteCategorieApplicatif(categorieApplicatifID) {
    return this.http.delete(this.url + 'categorieApplicatifs/' + categorieApplicatifID);
  }

}

