import { Injectable } from '@angular/core';
import { Employee } from '../../model/employee/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployService {
  employees: Employee[] = [
    {
      employeName: 'Sophia',
      department: 'Product Management',
      salary: 499,
      gender: 'F',
      address: '8 Petterle Trail',
    },
    {
      employeName: 'Koral',
      department: 'Business Development',
      salary: 249,
      gender: 'F',
      address: '7886 Commercial Circle',
    },
    {
      employeName: 'Birdie',
      department: 'Legal',
      salary: 79,
      gender: 'F',
      address: '61 Grim Hill',
    },
    {
      employeName: 'Gualterio',
      department: 'Product Management',
      salary: 32,
      gender: 'M',
      address: '78 Maple Hill',
    },
    {
      employeName: 'Renato',
      department: 'Research and Development',
      salary: 799,
      gender: 'M',
      address: '4819 Dennis Parkway',
    },
    {
      employeName: 'Ax',
      department: 'Sales',
      salary: 799,
      gender: 'M',
      address: '0 Menomonie Hill',
    },
    {
      employeName: 'Sarge',
      department: 'Business Development',
      salary: 369,
      gender: 'M',
      address: '4567 4th Plaza',
    },
    {
      employeName: 'Seline',
      department: 'Marketing',
      salary: 349,
      gender: 'F',
      address: '0044 Packers Terrace',
    },
    {
      employeName: 'Siouxie',
      department: 'Legal',
      salary: 229,
      gender: 'F',
      address: '273 Clarendon Drive',
    },
    {
      employeName: 'Emelda',
      department: 'Engineering',
      salary: 250,
      gender: 'F',
      address: '6925 Johnson Terrace',
    },
    {
      employeName: 'Nigel',
      department: 'Business Development',
      salary: 999,
      gender: 'M',
      address: '70 Huxley Parkway',
    },
    {
      employeName: 'Jeniffer',
      department: 'Services',
      salary: 699,
      gender: 'F',
      address: '814 Lakewood Gardens Court',
    },
    {
      employeName: 'Fairleigh',
      department: 'Human Resources',
      salary: 499,
      gender: 'M',
      address: '725 Continental Junction',
    },
    {
      employeName: 'Lauri',
      department: 'Engineering',
      salary: 349,
      gender: 'F',
      address: '50625 South Trail',
    },
    {
      employeName: 'Corette',
      department: 'Engineering',
      salary: 499,
      gender: 'F',
      address: '44 Fulton Plaza',
    },
    {
      employeName: 'Blondie',
      department: 'Training',
      salary: 349,
      gender: 'F',
      address: '367 Merchant Alley',
    },
    {
      employeName: 'Drucill',
      department: 'Training',
      salary: 399,
      gender: 'F',
      address: '8 Reinke Avenue',
    },
    {
      employeName: 'Reinwald',
      department: 'Legal',
      salary: 349,
      gender: 'M',
      address: '87578 Raven Alley',
    },
    {
      employeName: 'Dennie',
      department: 'Accounting',
      salary: 299,
      gender: 'M',
      address: '094 Warrior Crossing',
    },
    {
      employeName: 'Dallis',
      department: 'Business Development',
      salary: 199,
      gender: 'M',
      address: '3390 Nova Center',
    },
  ];

  constructor() {
    let data = localStorage.getItem('employeeData');
    this.employees = data ? JSON.parse(data) : this.employees;
  }

  getEmployee() {
    return this.employees;
  }

  getNames() {
    return this.employees.map((item) => item.employeName);
  }

  addEmployee(data: Employee) {
    this.employees.push(data);
    localStorage.setItem('employeeData', JSON.stringify(this.employees));
    return true;
  }

  removeEmployee(index: number) {
    this.employees.splice(index, 1);
    return this.employees;
  }

  save() {
    localStorage.setItem('employeeData', JSON.stringify(this.employees));
  }
}
