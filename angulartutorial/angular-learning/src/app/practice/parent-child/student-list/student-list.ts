import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  imports: [NgClass],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css', '../parent-child.css'],
})
export class StudentList {
  @Input() studentList: any = [];
}
