import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccesService} from '../acces.service';

@Component({
  selector: 'app-acces-show',
  templateUrl: './acces-show.component.html',
  styleUrls: ['./acces-show.component.css']
})
export class AccesShowComponent implements OnInit {

  userInfo: any = null;
  userID: any;
  constructor(private route: ActivatedRoute,
              private accesService: AccesService) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.loadUserInfos();
  }

  private loadUserInfos() {
    this.accesService.getUserById(this.userID).subscribe(
      (responseBody) => { this.processResponseBody(responseBody); },
      (error) => {  console.log(error); }
    );
  }

  private processResponseBody(responseBody) {
    this.userInfo = responseBody.data;
  }
}
