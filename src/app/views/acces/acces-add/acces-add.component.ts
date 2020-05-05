import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AccesService} from '../acces.service';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import {RxwebValidators} from '@rxweb/reactive-form-validators';
import {ValidationService} from '../../common/utils/validation.service';

@Component({
  selector: 'app-acces-add',
  templateUrl: './acces-add.component.html',
  styleUrls: ['./acces-add.component.css']
})
export class AccesAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private accesService: AccesService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }

  // convenience getter for easy access to form fields
  get f() { return this.accesAddForm.controls; }

  //  image preview
  public imagePath;
  imgURL: any;
  // form validation
  accesAddForm: FormGroup;
  submitted = false;
  selectedFile = null;

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.imgURL = null;
      this.toasterService.pop('error', 'Erreur dans la photo de profil:',
        'Seules les images sont prises en charge.');
      return;
    }
    this.selectedFile = files[0];
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }


  ngOnInit() {
    this.accesAddForm = this.formBuilder.group({
        photo: ['', [Validators.required, RxwebValidators.extension({extensions: ['jpg', 'png', 'jpeg']})]],
        identifiant: ['', [Validators.required]],
        role: ['', [Validators.required]],
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        cin: ['', [Validators.required]],
        telephone: ['', [Validators.required]],
        adresse: ['', [Validators.required]],
        departement: ['', [Validators.required]],
        lieu_de_travail: ['', [Validators.required]],
        date_d_embauche: ['', [Validators.required]],

    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.accesAddForm.invalid) {
        return;
    }

    // Create a request body data
    const requestBody = new FormData();
    requestBody.append('photo', this.selectedFile, this.selectedFile.name);
    requestBody.append('role', this.accesAddForm.get('role').value);
    requestBody.append('identifiant', this.accesAddForm.get('identifiant').value);
    requestBody.append('nom', this.accesAddForm.get('nom').value);
    requestBody.append('prenom', this.accesAddForm.get('prenom').value);
    requestBody.append('email', this.accesAddForm.get('email').value);
    requestBody.append('password', this.accesAddForm.get('password').value);
    requestBody.append('cin', this.accesAddForm.get('cin').value);
    requestBody.append('telephone', this.accesAddForm.get('telephone').value);
    requestBody.append('adresse', this.accesAddForm.get('adresse').value);
    requestBody.append('departement', this.accesAddForm.get('departement').value);
    requestBody.append('lieu_de_travail', this.accesAddForm.get('lieu_de_travail').value);
    requestBody.append('date_d_embauche', this.accesAddForm.get('date_d_embauche').value);

    this.accesService.addUser(requestBody).subscribe(
      (responseBody) => {this.responseBodyProcess(responseBody); },
      (error) => { this.validationService.showValidationsMessagesInToast(error); });
  }

  private responseBodyProcess(responseBody: any) {
    this.toasterService.pop('success', 'User added successfully!', responseBody.message);
    this.router.navigate(['/home/users/index']);
  }
}
