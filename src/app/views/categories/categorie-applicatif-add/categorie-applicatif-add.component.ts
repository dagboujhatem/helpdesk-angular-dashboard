import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CategorieApplicatifService} from '../categorie-applicatif.service';
import {ToasterService} from 'angular2-toaster';
import {ValidationService} from '../../common/utils/validation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorie-applicatif-add',
  templateUrl: './categorie-applicatif-add.component.html',
  styleUrls: ['./categorie-applicatif-add.component.css']
})
export class CategorieApplicatifAddComponent implements OnInit {

  selectedFile = null;
  categorieApplicatifAddForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private categorieApplicatifService: CategorieApplicatifService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }

  ngOnInit() {
    this.categorieApplicatifAddForm = this.formBuilder.group({
      type: ['', Validators.required],
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
  get f() { return this.categorieApplicatifAddForm.controls; }

  // on submit
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.categorieApplicatifAddForm.invalid) {
        return;
    }

    // Create a request body data
    const requestBody = new FormData();
    requestBody.append('type', this.categorieApplicatifAddForm.get('type').value);
    requestBody.append('probleme', this.categorieApplicatifAddForm.get('probleme').value);
    requestBody.append('description', this.categorieApplicatifAddForm.get('description').value);
    requestBody.append('solution_file', this.selectedFile, this.selectedFile.name);

    this.categorieApplicatifService.addCategorieApplicatif(requestBody).subscribe(
      (bodyResponse) => { this.processResponse(bodyResponse); },
      (error) => { this.validationService.showValidationsMessagesInToast(error);}
    );
  }

  processResponse(bodyResponse) {
    this.toasterService.pop('success', 'Catégorie applicatif ajoutée:', bodyResponse.message);
    this.router.navigate(['/home/categories/applicatif/index']);
  }
}
