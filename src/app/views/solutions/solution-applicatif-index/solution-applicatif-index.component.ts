import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import {SolutionService} from '../solution.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-solution-applicatif-index',
  templateUrl: './solution-applicatif-index.component.html',
  styleUrls: ['./solution-applicatif-index.component.css']
})
export class SolutionApplicatifIndexComponent implements OnDestroy, OnInit {
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;
    public solutionsApplicatifsData: Array<any> = [];
    dtOptions: DataTables.Settings = {};
    // @ts-ignore
    dtTrigger: Subject = new Subject();

    constructor(private solutionService: SolutionService,
                private toasterService: ToasterService,
                private dataTableService: DataTableService) { }

    ngOnInit(): void {
      this.dtOptions = this.dataTableService.getDataTableOptions();
      this.loadSolutionApplicatif();
    }

    // pour charger les solutions applicatif from REST API
    loadSolutionApplicatif() {
      this.solutionService.getAllSolutionApplicatif().subscribe(
        (bodyResponse) => { this.getSolutionsApplicatifData(bodyResponse); });
    }

    // get solutions data from body response
    getSolutionsApplicatifData(bodyResponse) {
      this.solutionsApplicatifsData = bodyResponse.data;
      this.dtTrigger.next();
    }

    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }
}
