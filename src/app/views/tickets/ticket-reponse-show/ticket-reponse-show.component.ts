import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TicketsService} from '../tickets.service';

@Component({
  selector: 'app-ticket-reponse-show',
  templateUrl: './ticket-reponse-show.component.html',
  styleUrls: ['./ticket-reponse-show.component.css']
})
export class TicketReponseShowComponent implements OnInit {
  responseID = null;
  ticketResponseData = null;
  ticketResponseShowForum: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ticketsService: TicketsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ticketResponseShowForum = this.formBuilder.group({
      nom_info: [{value: '', disabled: true}, ],
      description_solution: [{value: '', disabled: true}, ],
      file_solution: [{value: '', disabled: true}, ]
    });
    // pour lire l ID de l'url
    this.responseID = this.route.snapshot.paramMap.get('id');
    this.loadResponse();
  }

  loadResponse() {
      this.ticketsService.getTicketResponseById(this.responseID)
        .subscribe((bodyResponse) => { this.loadTicketResponseDataFromBodyResponse(bodyResponse); });
  }

  loadTicketResponseDataFromBodyResponse(bodyResponse) {
    const data = bodyResponse.data;
    this.ticketResponseShowForum.patchValue(data);
    this.ticketResponseData = data;
  }
}
