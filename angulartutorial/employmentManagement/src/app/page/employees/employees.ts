import { Component } from '@angular/core';
import { DataService } from '../../servicess/data-service';
import { Employee } from '../../interface/employee';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
  filterData!: Employee[];

  constructor(private dataService: DataService) {
    dataService.getData().subscribe((item) => {
      this.filterData = item.filter((data) => data.role !== 'admin' && data.role !== 'employer');
    });
  }
}
