import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccesService} from '../acces.service';
import {ToasterService} from 'angular2-toaster';
import {ValidationService} from '../../common/utils/validation.service';

@Component({
  selector: 'app-acces-update',
  templateUrl: './acces-update.component.html',
  styleUrls: ['./acces-update.component.css']
})
export class AccesUpdateComponent implements OnInit {

  accesUpdateForm: FormGroup;
  submitted = false;
  userInfo: any = null;
  userID: any;
  //  image preview
  public imagePath;
  imgURL: any;
  selectedFile = null;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private accesService: AccesService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }


  ngOnInit() {
    // get the user id from the url
    this.userID = this.route.snapshot.paramMap.get('id');
    // load the user info from the server
    this.loadUserInfos();
    // form validation angular
    this.accesUpdateForm = this.formBuilder.group({
      photo: ['', ],
      identifiant: ['', [Validators.required]],
      role: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', ],
      cin: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      departement: ['', [Validators.required]],
      lieu_de_travail: ['', [Validators.required]],
      date_d_embauche: ['', [Validators.required]],
    });
  }

  private loadUserInfos() {
    this.accesService.getUserById(this.userID).subscribe(
      responseBody => { this.processResponseBody(responseBody); }
    );
  }
  private processResponseBody(responseBody) {
    this.userInfo = responseBody.data;
    // Reset password value
    this.userInfo.password = '';
    // Reset date d'embauche value
    this.userInfo.date_d_embauche = new Date();
    // set all fields of the form with new values
    this.accesUpdateForm.patchValue(this.userInfo);
  }

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

  // convenience getter for easy access to form fields
  get f() { return this.accesUpdateForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.accesUpdateForm.invalid) {
        return;
    }

    // send updated info to REST API
    const requestBody = new FormData();
    requestBody.append('role', this.accesUpdateForm.get('role').value);
    requestBody.append('identifiant', this.accesUpdateForm.get('identifiant').value);
    requestBody.append('nom', this.accesUpdateForm.get('nom').value);
    requestBody.append('prenom', this.accesUpdateForm.get('prenom').value);
    requestBody.append('email', this.accesUpdateForm.get('email').value);
    requestBody.append('cin', this.accesUpdateForm.get('cin').value);
    requestBody.append('telephone', this.accesUpdateForm.get('telephone').value);
    requestBody.append('adresse', this.accesUpdateForm.get('adresse').value);
    requestBody.append('departement', this.accesUpdateForm.get('departement').value);
    requestBody.append('lieu_de_travail', this.accesUpdateForm.get('lieu_de_travail').value);
    requestBody.append('date_d_embauche', this.accesUpdateForm.get('date_d_embauche').value);

    const password = this.accesUpdateForm.get('password').value;
    if (this.selectedFile !== null && this.selectedFile !== undefined) {
      requestBody.append('photo', this.selectedFile, this.selectedFile.name);
    }
    if (password !== null && password !== undefined) {
      requestBody.append('password', password );
    }

    this.accesService.updateUser(this.userID, requestBody).subscribe(
      (responseBody) => {this.responseBodyProcess(responseBody); },
      (error) => { this.validationService.showValidationsMessagesInToast(error); });
  }
  private responseBodyProcess(responseBody: any) {
    this.toasterService.pop('success', 'User updated successfully!', responseBody.message);
    this.router.navigate(['/home/users/index']);
  }
}
