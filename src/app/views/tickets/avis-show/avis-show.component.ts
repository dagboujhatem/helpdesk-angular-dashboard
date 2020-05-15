import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-avis-show',
  templateUrl: './avis-show.component.html',
  styleUrls: ['./avis-show.component.css']
})
export class AvisShowComponent implements OnInit {

  avisID = null ;
 showAvisForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private ticketservice : TicketsService) { }

  ngOnInit(): void {
    this.showAvisForm= this.formBuilder.group({
      nom: [{value: '', disabled: true}, ],
      departement: [{value: '', disabled: true}, ],
      avis: [{value: '', disabled: true}, ],
      description: [{value: '', disabled: true}, ],
    });
    this.avisID = this.route.snapshot.paramMap.get('id');
    this.ticketservice.getavisById(this.avisID).subscribe(
      (bodyResponse) => { this.loadAvisData(bodyResponse); });
  }

  loadAvisData(bodyResponse) {
    const data = bodyResponse.data;
    this.showAvisForm.patchValue(data);
  }

}
