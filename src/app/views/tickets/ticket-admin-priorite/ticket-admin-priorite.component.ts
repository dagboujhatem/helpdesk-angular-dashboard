import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-admin-priorite',
  templateUrl: './ticket-admin-priorite.component.html',
  styleUrls: ['./ticket-admin-priorite.component.css']
})
export class TicketAdminPrioriteComponent implements OnInit {

  ticketAdminPrioriteForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.ticketAdminPrioriteForm = this.formBuilder.group({
        priorite: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketAdminPrioriteForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketAdminPrioriteForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ticketAdminPrioriteForm.value, null, 4));
  }

}
