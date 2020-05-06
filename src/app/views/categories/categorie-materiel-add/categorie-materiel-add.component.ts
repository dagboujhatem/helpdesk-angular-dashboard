import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategorieMaterielService } from '../categorie-materiel.service';
import { ToasterService } from 'angular2-toaster';
import { ValidationService } from '../../common/utils/validation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorie-materiel-add',
  templateUrl: './categorie-materiel-add.component.html',
  styleUrls: ['./categorie-materiel-add.component.css']
})
export class CategorieMaterielAddComponent implements OnInit {

  selectedFile = null;
  categorieMaterielAddForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private categorieMaterielService: CategorieMaterielService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }

  ngOnInit() {
    this.categorieMaterielAddForm = this.formBuilder.group({
      objet: ['', Validators.required],
      probleme: ['', Validators.required],
      description: ['', Validators.required],
      solutionFile: ['', Validators.required]
      });
  }

  changeSelectedFile(files) {
    if (files.length === 0) {
      return;
    }
    this.selectedFile = files[0];
  }

  // convenience getter for easy access to form fields
  get f() { return this.categorieMaterielAddForm.controls; }

  // on submit
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.categorieMaterielAddForm.invalid) {
        return;
    }

    // Create a request body data
    const requestBody = new FormData();
    requestBody.append('objet', this.categorieMaterielAddForm.get('objet').value);
    requestBody.append('probleme', this.categorieMaterielAddForm.get('probleme').value);
    requestBody.append('description', this.categorieMaterielAddForm.get('description').value);
    requestBody.append('solution_file', this.selectedFile, this.selectedFile.name);

    this.categorieMaterielService.addCategorieMateriel(requestBody).subscribe(
      (bodyResponse) => { this.processResponse(bodyResponse); },
      (error) => { this.validationService.showValidationsMessagesInToast(error); });
  }

  processResponse(bodyResponse) {
    this.toasterService.pop('success', 'Catégorie matériel ajoutée:', bodyResponse.message);
    this.router.navigate(['/home/categories/materiel/index']);
  }
}
