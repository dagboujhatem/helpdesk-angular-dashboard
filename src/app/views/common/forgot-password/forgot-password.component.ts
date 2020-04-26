import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import {AuthenticationService} from '../security/authentication.service';
import {AuthorizationService} from '../security/authorization.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private toasterService: ToasterService,
              private authentificationService: AuthenticationService) { }


  ngOnInit() {

    this.forgotPasswordForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.forgotPasswordForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotPasswordForm.invalid) {
        return;
    }

    // Get the value of email address
    const email = this.forgotPasswordForm.get('email').value;
    // Send to REST API
    this.authentificationService.forgetPassword(email).subscribe(
      bodyResponse => {
        this.processBodyResponse(bodyResponse);
        // save email in localStorage
        localStorage.setItem('email', email);
        },
      error => { this.errorProccess(error); }
    );
  }

  private processBodyResponse(bodyResponse) {
    // Show the success message in toaster
    this.toasterService.pop('success', 'Consulter votre e-mail:', bodyResponse.message);
  }
  private errorProccess(err) {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 400) {
        // show the error message in toaster
        this.toasterService.pop('error', 'Veuillez vérifier votre adresse e-mail!', err.error.message);
      }
    }
  }
}
