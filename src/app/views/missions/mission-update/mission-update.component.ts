import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionService } from '../mission.service';
import { ToasterService } from 'angular2-toaster';
import { ValidationService } from '../../common/utils/validation.service';

@Component({
  selector: 'app-mission-update',
  templateUrl: './mission-update.component.html',
  styleUrls: ['./mission-update.component.css']
})
export class MissionUpdateComponent implements OnInit {
  missionID = null ;
  missionUpdateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private missionService: MissionService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }
   ngOnInit() {
      this.missionID = this.route.snapshot.paramMap.get('id');
      this.missionService.getMissionById(this.missionID).subscribe(
        (bodyResponse) => { this.loadMissionData(bodyResponse); }
      );
      this.missionUpdateForm = this.formBuilder.group({
        nom: ['', Validators.required],
        fonction: ['', Validators.required],
        mission: ['', Validators.required],
        date_debut: ['', Validators.required],
        date_fin: ['', Validators.required],
        description: ['', Validators.required]
      });
  }

  loadMissionData(bodyResponse) {
    const data = bodyResponse.data;
    this.missionUpdateForm.patchValue(data);
  }


  // convenience getter for easy access to form fields
  get f() { return this.missionUpdateForm.controls; }

  // on submit
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.missionUpdateForm.invalid) {
      return;
    }

    // Create a request body data
    const requestBody = new FormData();
    requestBody.append('_method', 'put');
    requestBody.append('nom', this.missionUpdateForm.get('nom').value);
    requestBody.append('fonction', this.missionUpdateForm.get('fonction').value);
    requestBody.append('mission', this.missionUpdateForm.get('mission').value);
    requestBody.append('date_debut', this.missionUpdateForm.get('date_debut').value);
    requestBody.append('date_fin', this.missionUpdateForm.get('date_fin').value);
    requestBody.append('description', this.missionUpdateForm.get('description').value);

    this.missionService.updateMission(this.missionID, requestBody).subscribe(
      (bodyResponse) => { this.processResponse(bodyResponse); },
      (error) => { this.validationService.showValidationsMessagesInToast(error); }
    );
  }

  processResponse(bodyResponse) {
    this.toasterService.pop('success', 'La mission modifiée:', bodyResponse.message);
    this.router.navigate(['/home/missions/index']);
  }


}
