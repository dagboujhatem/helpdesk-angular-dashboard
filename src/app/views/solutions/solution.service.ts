import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  url = environment.serverUrl;

  constructor(private http: HttpClient) { }

  // Get all Solution applicatifs from the REST API
  getAllSolutionApplicatif() {
    return this.http.get(this.url + 'categorieApplicatifs');
  }

  // Get Solution applicatif by ID from the REST API
  getSolutionApplicatifById(id) {
    return this.http.get(this.url + 'categorieApplicatifs/' + id);
  }

  // Get all Solution materiels from the REST API
  getAllSolutionMateriel() {
    return this.http.get(this.url + 'categorieMateriels');
  }

  // Get Solution materiel by ID from the REST API
  getSolutionMaterielById(id) {
    return this.http.get(this.url + 'categorieMateriels/' + id);
  }
}
