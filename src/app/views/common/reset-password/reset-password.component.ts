import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({ 
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetPasswordForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPasswordForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetPasswordForm.value, null, 4));
  
  }
}
