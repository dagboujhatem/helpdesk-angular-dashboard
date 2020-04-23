import { Component, OnInit, ViewChild } from '@angular/core';
import {AccesService} from '../acces.service';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-acces-index',
  templateUrl: './acces-index.component.html',
  styleUrls: ['./acces-index.component.css']
})
export class AccesIndexComponent implements OnInit {

  public usersData: any = null ;

  constructor(private accesService: AccesService,
              private toasterService: ToasterService,
              ) { }

  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.getAllUsers();
  }

  private getAllUsers() {
    this.accesService.getAllUsers().subscribe(
<<<<<<< HEAD
      responseBody => {  this.loadUsersFromResponseBody(responseBody);},
=======
      responseBody => { this.loadUsersData(responseBody); },
>>>>>>> 12be8d858847cf9c62465521c85b32bd775a1c2d
      error => { console.log(error); }
    );
  }

<<<<<<< HEAD
  private loadUsersFromResponseBody(responseBody){
=======
  private loadUsersData(responseBody) {
>>>>>>> 12be8d858847cf9c62465521c85b32bd775a1c2d
    this.usersData = responseBody.data;
  }

  private deleteUser(userId) {
    this.accesService.deleteUser(userId).subscribe(responseBody => {
      this.deleteResponseBody(responseBody);
      }
    , error => {});
  }

  private deleteResponseBody(responseBody){
    this.toasterService.pop('success', 'User deleted successfully!', responseBody.message);
  }
}
