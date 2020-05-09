import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-confirmer',
  templateUrl: './mission-confirmer.component.html',
  styleUrls: ['./mission-confirmer.component.css']
})
export class MissionConfirmerComponent implements OnInit {

    missionShowForm: FormGroup;
    missionReponseForm: FormGroup;
    submitted = false;
    missionID = null ;

    constructor(private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private missionService: MissionService) { }


    ngOnInit() {
      // mission form
      this.missionShowForm = this.formBuilder.group({
          nom: [{value: '', disabled: true}, ],
          fonction: [{value: '', disabled: true}, ],
          mission: [{value: '', disabled: true}, ],
          date_debut: [{value: '', disabled: true}, ],
          date_fin: [{value: '', disabled: true}, ],
          description: [{value: '', disabled: true}, ]
      });
      // read id from url
      this.missionID = this.route.snapshot.paramMap.get('id');
      // get mission data
      this.missionService.getMissionById(this.missionID).subscribe(
      (bodyResponse) => { this.loadMissionData(bodyResponse); });
      // réponse form
      this.missionReponseForm = this.formBuilder.group({
          nom: [{value: '', disabled: true}, ],
          collaborateurs: [{value: '', disabled: true}, ],
          mission: [{value: '', disabled: true}, ],
          date_debut: [{value: '', disabled: true}, ],
          date_fin: [{value: '', disabled: true}, ],
          reponse: [{value: '', disabled: true}, ]
      });
    }

    loadMissionData(bodyResponse) {
      const missionData = bodyResponse.data;
      const missionResponseData = missionData.mission_response;
      this.missionShowForm.patchValue(missionData);
      this.missionReponseForm.patchValue(missionResponseData);
    }

    // convenience getter for easy access to form fields
    get f() { return this.missionReponseForm.controls; }

    onSubmit() {
        this.submitted = true;

          // stop here if form is invalid
          if (this.missionReponseForm.invalid) {
          return;
          }
    }

}
