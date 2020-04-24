import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import {AuthenticationService} from '../security/authentication.service';
import {AuthorizationService} from '../security/authorization.service';
import {Router} from '@angular/router';

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
              private authentificationService: AuthenticationService,
              private router: Router) { }


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

    // Get the value of email adress
    const email = this.forgotPasswordForm.get('email').value;
    // Send to REST API
    this.authentificationService.forgetPassword(email).subscribe(
      bodyResponse => { this.processBodyResponse(bodyResponse); },
      error => { console.log(error); }
    );
  }

  private processBodyResponse(bodyResponse) {
    // Show toast message
    this.toasterService.pop('success', 'Connecté avec succès!', bodyResponse.message);
    // redirection  to reset-password
    this.router.navigate(['/reset-password']);
  }
}
