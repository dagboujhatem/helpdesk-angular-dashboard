import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-show',
  templateUrl: './mission-show.component.html',
  styleUrls: ['./mission-show.component.css']
})
export class MissionShowComponent implements OnInit {

  missionID = null ;
  missionShowForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private missionService: MissionService) { }

  ngOnInit(): void {
    this.missionShowForm = this.formBuilder.group({
      nom: [{value: '', disabled: true}, ],
      fonction: [{value: '', disabled: true}, ],
      mission: [{value: '', disabled: true}, ],
      date_debut: [{value: '', disabled: true}, ],
      date_fin: [{value: '', disabled: true}, ],
      description: [{value: '', disabled: true},]
    });
    this.missionID = this.route.snapshot.paramMap.get('id');
    this.missionService.getMissionById(this.missionID).subscribe(
      (bodyResponse) => { this.loadMissionData(bodyResponse); });
  }

  loadMissionData(bodyResponse) {
    const data = bodyResponse.data;
    this.missionShowForm.patchValue(data);
  }
}
