import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mission',
  templateUrl: './mission-add.component.html',
  styleUrls: ['./mission-add.component.css']
})
export class MissionAddComponent implements OnInit {

  missionForum: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this. missionForum = this.formBuilder.group({
        nom: ['', [Validators.required]],
        fonction: ['', [Validators.required]],
        date_debut: ['', [Validators.required]],
        date_fin: ['', [Validators.required]],
        mission: ['', [Validators.required]],
        description: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.missionForum.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.missionForum.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.missionForum.value, null, 4));
  }

}
