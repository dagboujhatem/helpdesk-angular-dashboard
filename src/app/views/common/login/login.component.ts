import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private toasterService: ToasterService) { }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    this.toasterService.pop('success', 'Args Title', 'Args Body');
    this.toasterService.pop('error', 'Args Title', 'Args Body');
    this.toasterService.pop('warning', 'Args Title', 'Args Body');
    this.toasterService.pop('info', 'Args Title', 'Args Body');
  }

}
