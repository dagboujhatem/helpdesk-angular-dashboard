import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../settings.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import {ValidationService} from '../../common/utils/validation.service';
import {AuthorizationService} from '../../common/security/authorization.service';
import {Router} from '@angular/router';
import {RxwebValidators} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  email = null;
  userInfo: any = null;
  //  image preview
  public imagePath;
  imgURL: any;
  // form validation
  settingsForm: FormGroup;
  submitted = false;
  selectedFile = null;
  constructor(private settingsService: SettingsService,
              private formBuilder: FormBuilder,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private authorizationService: AuthorizationService,
              private router: Router) { }

  ngOnInit(): void {
    // load the current email address
    this.email = this.authorizationService.getEmail();
    // get info from rest api
    this.settingsService.getInfos(this.email)
      .subscribe((reponseBody) => { this.loadDataFromReponseBody(reponseBody); });
    // formbuilder settings
    this.settingsForm = this.formBuilder.group({
      photo: ['', [Validators.required, RxwebValidators.extension({extensions: ['jpg', 'png', 'jpeg']})]],
      identifiant: ['', [Validators.required]],
      role: [{value : '', disabled: true}, [Validators.required]],
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

  private loadDataFromReponseBody(responseBody) {
    this.userInfo = responseBody.data;
    // image
    this.imgURL = this.userInfo.photo;
    // Reset password value
    this.userInfo.password = '';
    // set all fields of the form with new values
    this.settingsForm.patchValue(this.userInfo);
  }


  // convenience getter for easy access to form fields
  get f() { return this.settingsForm.controls; }

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


  onSubmit() {
    this.submitted = true;
    // update password validation
    const password = this.settingsForm.get('password').value;

    if (password !== null && password !== undefined && password !== '') {
      this.settingsForm.setControl('password',
        new FormControl(password , [Validators.required, Validators.minLength(6)]));
    } else {
      this.settingsForm.setControl('password',
        new FormControl(password , []));
    }
    // update selectedFile validation
    const photo = this.settingsForm.get('photo').value;
    if (this.selectedFile !== null && this.selectedFile !== undefined) {
      this.settingsForm.setControl('photo',
        new FormControl(photo , [Validators.required,
          RxwebValidators.extension({extensions: ['jpg', 'png', 'jpeg']})]));
    }
    // stop here if form is invalid
    if (this.settingsForm.invalid) {
      return;
    }

    // Create a request body data
    const requestBody = new FormData();
    requestBody.append('_method', 'put');
    requestBody.append('id', this.userInfo.id);
    requestBody.append('role', this.settingsForm.get('role').value);
    requestBody.append('identifiant', this.settingsForm.get('identifiant').value);
    requestBody.append('nom', this.settingsForm.get('nom').value);
    requestBody.append('prenom', this.settingsForm.get('prenom').value);
    requestBody.append('email', this.settingsForm.get('email').value);
    requestBody.append('cin', this.settingsForm.get('cin').value);
    requestBody.append('telephone', this.settingsForm.get('telephone').value);
    requestBody.append('adresse', this.settingsForm.get('adresse').value);
    requestBody.append('departement', this.settingsForm.get('departement').value);
    requestBody.append('lieu_de_travail', this.settingsForm.get('lieu_de_travail').value);
    requestBody.append('date_d_embauche', this.settingsForm.get('date_d_embauche').value);

    if (password !== null && password !== undefined && password !== '') {
      requestBody.append('password', password );
    }
    if (this.selectedFile !== null && this.selectedFile !== undefined) {
      requestBody.append('photo', this.selectedFile, this.selectedFile.name);
    }

    this.settingsService.saveInfo(this.userInfo.id, requestBody).subscribe(
      (responseBody) => {
        this.updateEmailAvatarInLocalStorage(responseBody);
        this.responseBodyProcess(responseBody);
        },
      (error) => { this.validationService.showValidationsMessagesInToast(error); });
  }

  private responseBodyProcess(responseBody: any) {
    this.toasterService.pop('success', 'Modification enregistrée:', responseBody.message);
    this.router.navigate(['/home/dashboard']);
  }

  // update email & avatar localStorage
  updateEmailAvatarInLocalStorage(responseBody) {
    const data = responseBody.data;
    if (data !== null && data !== undefined) {
      this.authorizationService.setAvatar(data.photo);
      this.authorizationService.setEmail(data.email);
    }
  }

}
