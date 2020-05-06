import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieMaterielService {

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // Get all  categories materiels from the REST API
  getCategorieMateriel() {
    return this.http.get(this.url + 'categorieMateriels');
  }

  // Get categorie materiel by ID from the REST API
  getCategorieMaterielById (id) {
    return this.http.get(this.url + 'categorieMateriels/' + id);
  }

  // Add a categorie materiel from the REST API
  addCategorieMateriel(CategorieMaterielData) {
   return  this.http.post(this.url + 'categorieMateriels', CategorieMaterielData);
  }

  // Update a categorie materiel from the REST API
  updateCategorieMateriel(CategorieMaterielID , CategorieMaterielNewData) {
    return this.http.put(this.url + 'categorieMateriels/' + CategorieMaterielID, CategorieMaterielNewData);
  }

  // Delete a categorie materiel from the REST API
  deleteCategorieMateriel(CategorieMaterielID) {
    return this.http.delete(this.url + 'categorieMateriels/' + CategorieMaterielID);
  }
}

