import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import {AuthenticationService} from '../security/authentication.service';
import {Router} from '@angular/router';
import {AuthorizationService} from '../security/authorization.service';
import {ValidationService} from '../utils/validation.service';
import {AppSidebarService} from '../utils/app-sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private authentificationService: AuthenticationService,
              private authorizationService: AuthorizationService,
              private router: Router,
              private appSidebarService: AppSidebarService) { }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // Send data to REST API
    this.authentificationService.login(this.loginForm.value).subscribe(
      (bodyResponse) => {this.loginSuccess(bodyResponse); },
        (error) => { this.loginError(error); });
  }

  loginSuccess(bodyResponse) {
    const responseData = bodyResponse.data;
    // Save data in localStorage
    this.authorizationService.setRole(responseData.role);
    this.authorizationService.setAvatar(responseData.avatar);
    this.authorizationService.setTokenType(responseData.token_type);
    // save authenticationObject in localStorage
    const token = responseData.access_token;
    const expiredTokenDate = responseData.expires_at;
    const authenticationObject = {
      accessToken: token,
      expiredTokenDate: expiredTokenDate,
    };
    localStorage.setItem('authenticationObject', JSON.stringify(authenticationObject));
    // Show toast message
    this.toasterService.pop('success', 'Connecté avec succès!', bodyResponse.message);
    // reload nav item
    this.appSidebarService.reloadNavItem();
    // redirection  to dashboard
    this.router.navigate(['/home/dashboard']);
  }

  private loginError(error) {
    if (error.status === 401) {
      this.toasterService.pop('error', 'Veuillez vérifier votre e-mail ou votre mot de passe!', error.error.message);
    } else {
      this.validationService.showValidationsMessagesInToast(error);
    }
  }
}
