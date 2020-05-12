import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SolutionService} from '../solution.service';

@Component({
  selector: 'app-solution-applicatif-show',
  templateUrl: './solution-applicatif-show.component.html',
  styleUrls: ['./solution-applicatif-show.component.css']
})
export class SolutionApplicatifShowComponent implements OnInit {
  solutionApplicatifID = null ;
  solutionApplicatifShowForm: FormGroup;
  solutionFile = null;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private solutionService: SolutionService) { }

  ngOnInit(): void {
    this.solutionApplicatifShowForm = this.formBuilder.group({
      type: [{value: '', disabled: true}, ],
      probleme: [{value: '', disabled: true}, ],
      description: [{value: '', disabled: true}, ]
    });
    this.solutionApplicatifID = this.route.snapshot.paramMap.get('id');
    this.solutionService.getSolutionApplicatifById(this.solutionApplicatifID).subscribe(
      (bodyResponse) => { this.loadSolutionData(bodyResponse); }
    );
  }

  loadSolutionData(bodyResponse) {
    const data = bodyResponse.data;
    this.solutionApplicatifShowForm.patchValue(data);
    this.solutionFile = data.solution_file;
  }

}
