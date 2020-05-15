import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-ticket-show',
  templateUrl: './ticket-show.component.html',
  styleUrls: ['./ticket-show.component.css']
})
export class TicketShowComponent implements OnInit {

  ticketID = null ;
  ticketShowForm: FormGroup;
  file = null;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private ticketService: TicketsService) { }

  ngOnInit(): void {
    this.ticketShowForm = this.formBuilder.group({
      objet: [{value: '', disabled: true}, ],
      element: [{value: '', disabled: true}, ],
      nom: [{value: '', disabled: true}, ],
      date_d_ouverture: [{value: '', disabled: true}, ],
      date_d_echeance: [{value: '', disabled: true}, ],
      categorie: [{value: '', disabled: true}, ],
      impact: [{value: '', disabled: true}, ],
      etat: [{value: '', disabled: true}, ],
      departement: [{value: '', disabled: true}, ],
      num_agence: [{value: '', disabled: true}, ],
      commentaire: [{value: '', disabled: true}, ],
      lieu: [{value: '', disabled: true}, ],
      description: [{value: '', disabled: true}, ]
    });
    this.ticketID = this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicketById(this.ticketID).subscribe(
      (bodyResponse) => { this.loadTicketData(bodyResponse); });
  }

  loadTicketData(bodyResponse) {
    const data = bodyResponse.data;
    this.ticketShowForm.patchValue(data);
    this.file = data.file;
  }

}
