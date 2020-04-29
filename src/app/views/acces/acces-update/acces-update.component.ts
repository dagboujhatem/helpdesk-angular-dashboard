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
      photo: ['', [Validators.required]],
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
      lieux_de_travail: ['', [Validators.required]],
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
    // set all fields of the form with new values
    this.accesUpdateForm.patchValue(this.userInfo);
    // Reset password value
    // Reset date d'embauche value
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
    const userUpdatedInfo = {};
    this.accesService.updateUser(this.userID, userUpdatedInfo).subscribe(
      (responseBody) => {this.responseBodyProcess(responseBody); },
      (error) => { this.validationService.showValidationsMessagesInToast(error); });
  }
  private responseBodyProcess(responseBody: any) {
    this.toasterService.pop('success', 'User updated successfully!', responseBody.message);
    this.router.navigate(['/home/users/index']);
  }
}
