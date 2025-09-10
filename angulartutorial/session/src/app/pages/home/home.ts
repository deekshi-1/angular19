import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Student } from '../../models/student';
import { InputBox } from '../input/input';
@Component({
  selector: 'app-home',
  imports: [InputBox],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @Output() logout = new EventEmitter<string>();
  stusentList!: Student[];
  currentUser: any = '';
  showInput: boolean = false;
  studentData: Student = {
    name: '',
    age: 0,
    number: '',
    mark: 0,
  };

  constructor(private dataService: DataService) {
    this.currentUser = localStorage.getItem('login');
    this.getStudents();
  }

  getStudents() {
    this.dataService.getStudents().subscribe((item) => {
      if (item) this.stusentList = item;
    });
  }

  reload() {
    this.getStudents();
  }

  logOut() {
    this.logout.emit();
  }

  delete(data: Student) {
    this.dataService.removeStudent(data).subscribe(() => {
      this.getStudents();
    });
  }
  edit(data: Student) {
    this.showInput = true;
    this.studentData = data;
  }

  addNewUser() {
    this.showInput = true;
    this.studentData = {
      name: '',
      age: 0,
      number: '',
      mark: 0,
    };
  }
  hide() {
    this.showInput = false;
  }
}
