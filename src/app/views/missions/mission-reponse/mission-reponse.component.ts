import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MissionService} from '../mission.service';
import {ToasterService} from 'angular2-toaster';
import {ValidationService} from '../../common/utils/validation.service';

@Component({
  selector: 'app-mission-reponse',
  templateUrl: './mission-reponse.component.html',
  styleUrls: ['./mission-reponse.component.css']
})
export class MissionReponseComponent implements OnInit {
  missionReponseForm: FormGroup;
  submitted = false;
  missionID = null ;
  missionShowForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private missionService: MissionService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }


  ngOnInit() {
    // mission form
    this.missionShowForm = this.formBuilder.group({
      nom: [{value: '', disabled: true}, ],
      fonction: [{value: '', disabled: true}, ],
      mission: [{value: '', disabled: true}, ],
      date_debut: [{value: '', disabled: true}, ],
      date_fin: [{value: '', disabled: true}, ],
      description: [{value: '', disabled: true},]
    });
    // read id from url
    this.missionID = this.route.snapshot.paramMap.get('id');
    // get mission data
    this.missionService.getMissionById(this.missionID).subscribe(
      (bodyResponse) => { this.loadMissionData(bodyResponse); });
    // réponse form
    this.missionReponseForm = this.formBuilder.group({
      nom: ['', Validators.required],
      collaborateurs: ['', Validators.required],
      mission: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      reponse: ['', Validators.required]
    });
  }

  loadMissionData(bodyResponse) {
    const data = bodyResponse.data;
    this.missionShowForm.patchValue(data);
  }

// convenience getter for easy access to form fields
get f() { return this.missionReponseForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.missionReponseForm.invalid) {
        return;
    }

    // Create a request body data
    const requestBody = new FormData();
    requestBody.append('nom', this.missionReponseForm.get('nom').value);
    requestBody.append('collaborateurs', this.missionReponseForm.get('collaborateurs').value);
    requestBody.append('mission', this.missionReponseForm.get('mission').value);
    requestBody.append('date_debut', this.missionReponseForm.get('date_debut').value);
    requestBody.append('date_fin', this.missionReponseForm.get('date_fin').value);
    requestBody.append('reponse', this.missionReponseForm.get('reponse').value);
    requestBody.append('mission_id', this.missionID);

    this.missionService.addMissionResponse(requestBody).subscribe(
      (bodyResponse) => { this.processResponse(bodyResponse); },
      (error) => { this.validationService.showValidationsMessagesInToast(error);}
    );
  }

  processResponse(bodyResponse) {
    this.toasterService.pop('success', 'Réponse ajoutée:', bodyResponse.message);
    this.router.navigate(['/home/missions/index']);
  }

}
