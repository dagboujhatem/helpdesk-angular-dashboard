import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {SolutionService} from '../solution.service';

@Component({
  selector: 'app-solution-materiel-show',
  templateUrl: './solution-materiel-show.component.html',
  styleUrls: ['./solution-materiel-show.component.css']
})
export class SolutionMaterielShowComponent implements OnInit {
  solutionMaterielID = null ;
  solutionMaterielShowForm: FormGroup;
  solutionFile = null;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private solutionService: SolutionService) { }

  ngOnInit(): void {
    this.solutionMaterielShowForm = this.formBuilder.group({
      objet: [{value: '', disabled: true}, ],
      probleme: [{value: '', disabled: true}, ],
      description: [{value: '', disabled: true}, ]
    });
    this.solutionMaterielID = this.route.snapshot.paramMap.get('id');
    this.solutionService.getSolutionMaterielById(this.solutionMaterielID).subscribe(
      (bodyResponse) => { this.loadSolutionData(bodyResponse); });
  }

  loadSolutionData(bodyResponse) {
    const data = bodyResponse.data;
    this.solutionMaterielShowForm.patchValue(data);
    this.solutionFile = data.solution_file;
  }
}
