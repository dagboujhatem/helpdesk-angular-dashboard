import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AccesService} from '../acces.service';
import {ToasterService} from 'angular2-toaster';
import {DataTableService} from '../../common/utils/data-table.service';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-acces-index',
  templateUrl: './acces-index.component.html',
  styleUrls: ['./acces-index.component.css']
})
export class AccesIndexComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  public usersData: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  dtTrigger: Subject = new Subject();

  constructor(private accesService: AccesService,
              private toasterService: ToasterService,
              private dataTableService: DataTableService) { }


  ngOnInit() {
    this.dtOptions = this.dataTableService.getDataTableOptions();
    this.getAllUsers();
  }

  private getAllUsers() {
    this.accesService.getAllUsers().subscribe(
      (responseBody) => {  this.loadUsersFromResponseBody(responseBody); },
      (error) => { });
  }

  private loadUsersFromResponseBody(responseBody) {
    this.usersData = responseBody.data;
    this.dtTrigger.next();
  }

  private deleteUser(userId) {
    this.dataTableService.confirmDeleteMessage().then((result) => {
      // delete the user from rest api
      this.accesService.deleteUser(userId).subscribe(
        (responseBody) => { this.deleteResponseBody(responseBody); },
          (error) => {});
    }).catch(() => {});

  }

  private deleteResponseBody(responseBody) {
    this.toasterService.pop('success', 'Supprimé avec succès:', responseBody.message);
    this.rerender();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the rest api again
      this.getAllUsers();
    });
  }
}
