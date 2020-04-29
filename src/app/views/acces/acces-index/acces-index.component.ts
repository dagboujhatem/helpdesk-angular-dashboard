import { Component, OnInit, ViewChild } from '@angular/core';
import {AccesService} from '../acces.service';
import {ToasterService} from 'angular2-toaster';
import {DataTableService} from '../../common/utils/data-table.service';

@Component({
  selector: 'app-acces-index',
  templateUrl: './acces-index.component.html',
  styleUrls: ['./acces-index.component.css']
})
export class AccesIndexComponent implements OnInit {

  public usersData: any = null;
  dtOptions: DataTables.Settings = {};

  constructor(private accesService: AccesService,
              private toasterService: ToasterService,
              private dataTableService: DataTableService) { }


  ngOnInit() {
    // this.dtOptions = this.dataTableService.getDataTableOptions();
    this.getAllUsers();
  }

  private getAllUsers() {
    this.accesService.getAllUsers().subscribe(
      (responseBody) => {  this.loadUsersFromResponseBody(responseBody); },
      (error) => { console.log(error); }
    );
  }

  private loadUsersFromResponseBody(responseBody) {
    this.usersData = responseBody.data;
  }

  private deleteUser(userId) {
    this.accesService.deleteUser(userId).subscribe(
      (responseBody) => { this.deleteResponseBody(responseBody); },
        (error) => {});
  }

  private deleteResponseBody(responseBody) {
    this.toasterService.pop('success', 'Supprimé avec succès!', responseBody.message);
  }
}
