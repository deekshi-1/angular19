import { Component } from '@angular/core';
import { Employee } from '../../interface/employee';
import { DataService } from '../../servicess/data-service';

@Component({
  selector: 'app-company-detail',
  imports: [],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.css',
})
export class CompanyDetail {
  filterData!: Employee[];

  constructor(private dataService: DataService) {
    dataService.getData().subscribe((item) => {
      this.filterData = [...item];
    });
  }
}
