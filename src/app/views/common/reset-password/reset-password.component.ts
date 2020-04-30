import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';
import {HttpErrorResponse} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {AuthenticationService} from '../security/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidationService} from '../utils/validation.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  submitted = false;
  token = null;
  email = null;

  constructor(private formBuilder: FormBuilder,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private authentificationService: AuthenticationService,
              private route: ActivatedRoute, // for get the token from URL
              private router: Router) { }   // for redirection to login

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    // get the token value from URL
    this.token = this.route.snapshot.paramMap.get('token');
    // get email from localStorage
    this.email = localStorage.getItem('email');
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPasswordForm.invalid) {
        return;
    }

    // get the new password value
    const password = this.resetPasswordForm.get('password').value;
    const confirmPassword = this.resetPasswordForm.get('confirmPassword').value;

    // create a bodyData
    const bodyData = {
      email: this.email,
      password: password,
      password_confirmation: confirmPassword,
      token: this.token
    };

    // send data to Rest API
    this.authentificationService.resetPassword(bodyData).subscribe(
      bodyResponse => { this.processBodyResponse(bodyResponse); },
      error => { this.errorProccess(error); }
    );
  }

  private processBodyResponse(bodyResponse) {
    // Show the success message in toaster
    this.toasterService.pop('success', 'Consulter votre e-mail:', bodyResponse.message);
    // remove email from localStorage
    localStorage.removeItem('email');
    // redirect to login
    this.router.navigate(['/login']);
  }
  private errorProccess(err) {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 400) {
        // show the error message in toaster
        this.toasterService.pop('error', 'Invalid token!', err.error.message);
      } else {
        this.validationService.showValidationsMessagesInToast(err);
      }
    }
  }
}
