  import { Component, DoCheck } from '@angular/core';
  import { EmployeeList } from './employee-list/employee-list';
  import { Employee } from '../../model/employee/employee';
  import { FormsModule } from '@angular/forms';
  import { EmployService } from '../../service/employee/employ-service';

  @Component({
    selector: 'app-employee-lifecycle',
    imports: [EmployeeList, FormsModule],
    templateUrl: './employee-lifecycle.html',
    styleUrl: './employee-lifecycle.css',
  })
  export class EmployeeLifecycle implements DoCheck {
    flag: boolean = true;
    emp: Employee = { employeName: '', department: '', salary: 0, gender: '', address: '' };
    filterString: string = '';
    names!: string[];

    constructor(private employeeService: EmployService) {
      this.names = employeeService.getNames();
    }
    ngDoCheck(): void {
      console.log("Do check lifeCycle");
    }

    toggle() {
      this.flag = !this.flag;
    }
    clear() {
      this.emp = { employeName: '', department: '', salary: 0, gender: '', address: '' };
    }
    submit() {
      if (
        this.emp.employeName == '' ||
        this.emp.department == '' ||
        this.emp.salary == 0 ||
        this.emp.address == '' ||
        this.emp.gender == ''
      ) {
        alert('All fields are required');
      } else {
        let response = this.employeeService.addEmployee(this.emp);
        if (response) {
            alert("Employee added")
            this.clear();
        }
      }
    }
  }
