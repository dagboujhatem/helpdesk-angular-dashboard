import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acces-index',
  templateUrl: './acces-index.component.html',
  styleUrls: ['./acces-index.component.css']
})
export class AccesIndexComponent implements OnInit {
//@ViewChild('dataTable') table;
  //dataTable: any;
  
  constructor() { }

  ngOnInit(): void {
    //this.dataTable = $(this.table.nativeElement);
    //this.dataTable.DataTable();
  }

}
