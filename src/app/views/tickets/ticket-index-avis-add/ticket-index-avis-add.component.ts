import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticket-index-avis-add',
  templateUrl: './ticket-index-avis-add.component.html',
  styleUrls: ['./ticket-index-avis-add.component.css']
  
})
export class TicketIndexAvisAddComponent implements OnInit {

  avisAddForum: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.avisAddForum = this.formBuilder.group({
        avis: ['', [Validators.required]],
        description: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.avisAddForum .controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.avisAddForum .invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.avisAddForum .value, null, 4));
  }


}
