import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import {ValidationService} from '../../common/utils/validation.service';
import {Router} from '@angular/router';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission-add.component.html',
  styleUrls: ['./mission-add.component.css']
})
export class MissionAddComponent implements OnInit {

  missionForum: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private missionService: MissionService,
    private toasterService: ToasterService,
    private validationService: ValidationService,
    private router: Router) { }


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

     // Create a request body data
     const requestBody = new FormData();
     requestBody.append('nom', this.missionForum.get('nom').value);
     requestBody.append('fonction', this.missionForum.get('fonction').value);
     requestBody.append('mission', this.missionForum.get('mission').value);
     requestBody.append('date_debut', this.missionForum.get('date_debut').value);
     requestBody.append('date_fin', this.missionForum.get('date_fin').value);
     requestBody.append('description', this.missionForum.get('description').value);

     this.missionService.addMission(requestBody).subscribe(
       (bodyResponse) => { this.processResponse(bodyResponse); },
       (error) => { this.validationService.showValidationsMessagesInToast(error);}
     );
   }

   processResponse(bodyResponse) {
     this.toasterService.pop('success', 'Mission ajoutée:', bodyResponse.message);
     this.router.navigate(['/home/missions/index']);
   }
}
