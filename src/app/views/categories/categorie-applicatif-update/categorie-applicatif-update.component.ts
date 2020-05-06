import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieApplicatifService} from '../categorie-applicatif.service';
import {ToasterService} from 'angular2-toaster';
import {ValidationService} from '../../common/utils/validation.service';

@Component({
  selector: 'app-categorie-applicatif-update',
  templateUrl: './categorie-applicatif-update.component.html',
  styleUrls: ['./categorie-applicatif-update.component.css']
})
export class CategorieApplicatifUpdateComponent implements OnInit {
  categirieApplicatifID = null ;
  selectedFile = null;
  categorieApplicatifUpdateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private categorieApplicatifService: CategorieApplicatifService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }

  ngOnInit() {
    this.categirieApplicatifID = this.route.snapshot.paramMap.get('id');
    this.categorieApplicatifService.getCategorieApplicatifById(this.categirieApplicatifID).subscribe(
      (bodyResponse) => { this.loadCategorieData(bodyResponse); }
    );
    this.categorieApplicatifUpdateForm = this.formBuilder.group({
      type: ['', Validators.required],
      probleme: ['', Validators.required],
      description: ['', Validators.required],
      solutionFile: ['', ]
    });
  }

  loadCategorieData(bodyResponse) {
    const data = bodyResponse.data;
    this.categorieApplicatifUpdateForm.patchValue(data);
  }

  changeSelectedFile(files) {
    if (files.length === 0) {
      return;
    }
    this.selectedFile = files[0];
  }

  // convenience getter for easy access to form fields
  get f() { return this.categorieApplicatifUpdateForm.controls; }

  // on submit
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.categorieApplicatifUpdateForm.invalid) {
      return;
    }

    // Create a request body data
    const requestBody = new FormData();
    requestBody.append('_method', 'put');
    requestBody.append('type', this.categorieApplicatifUpdateForm.get('type').value);
    requestBody.append('probleme', this.categorieApplicatifUpdateForm.get('probleme').value);
    requestBody.append('description', this.categorieApplicatifUpdateForm.get('description').value);
    if (this.selectedFile !== undefined && this.selectedFile !== null) {
      requestBody.append('solution_file', this.selectedFile, this.selectedFile.name);
    }
    this.categorieApplicatifService.updateCategorieApplicatif(this.categirieApplicatifID, requestBody).subscribe(
      (bodyResponse) => { this.processResponse(bodyResponse); },
      (error) => { this.validationService.showValidationsMessagesInToast(error); }
    );
  }

  processResponse(bodyResponse) {
    this.toasterService.pop('success', 'Catégorie applicatif modifiée:', bodyResponse.message);
    this.router.navigate(['/home/categories/applicatif/index']);
  }
}
