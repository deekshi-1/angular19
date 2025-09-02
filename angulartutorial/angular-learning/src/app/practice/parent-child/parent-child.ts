import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Child } from './child/child';
import { StudentList } from './student-list/student-list';

@Component({
  selector: 'app-parent-child',
  imports: [NgClass, Child, StudentList],
  templateUrl: './parent-child.html',
  styleUrl: './parent-child.css',
})
export class ParentChild {
  flag: boolean = true;
  students: any[] = [{ name: 'Arun', course: 'abc', mark: '92' }];
  addUser() {
    this.flag = true;
  }
  listUser() {
    this.flag = false;
  }
  recieveData(data: { name: string; course: string; mark: number | null }) {
    let found = false;
    this.students.forEach((element) => {
      if (element.name == data.name) {
        found = true;
      }
    });
    if (found) {
      alert('Student already exist');
    } else {
      this.students.push(data);
      console.log(this.students);
    }
  }
}
