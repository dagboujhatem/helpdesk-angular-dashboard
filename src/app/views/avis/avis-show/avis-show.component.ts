import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {AvisService} from '../avis.service';

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
              private avisService: AvisService) { }

  ngOnInit(): void {
    this.showAvisForm = this.formBuilder.group({
      nom: [{value: '', disabled: true}, ],
      departement: [{value: '', disabled: true}, ],
      avis: [{value: '', disabled: true}, ],
      description: [{value: '', disabled: true}, ],
    });
    this.avisID = this.route.snapshot.paramMap.get('id');
    this.avisService.getAvistById(this.avisID).subscribe(
      (bodyResponse) => { this.loadAvisData(bodyResponse); });
  }

  loadAvisData(bodyResponse) {
    const data = bodyResponse.data;
    // pour ne pas une 2éme requete pour charger les informations d'une ticket
    const formData = {
      nom:  data.ticket.nom,
      departement: data.ticket.departement,
      avis: data.avis,
      description: data.description
    };
    this.showAvisForm.patchValue(formData);
  }

}
