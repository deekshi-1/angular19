import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../../../model/employee/employee';
import { EmployService } from '../../../service/employee/employ-service';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit, OnChanges, OnDestroy {
  employeeList!: Employee[];
  filterList!: Employee[];
  @Input() filterString: string = '';

  constructor(private employeeService: EmployService) {}
  ngOnDestroy(): void {
    console.log('ngOnDestroy lifeCycle');

    this.employeeService.save();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterString'] && this.employeeList) {
      this.filterList = this.employeeList.filter((item) =>
        item.employeName.includes(this.filterString)
      );
    }
  }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployee();
    this.filterList = this.employeeList;
    if (this.filterString != '') {
      this.filterList = this.employeeList.filter((item) =>
        item.employeName.includes(this.filterString)
      );
    }
  }

  remove(index: number) {
    this.employeeList = this.employeeService.removeEmployee(index);
  }
}
