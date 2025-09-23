import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interface/todo';
import { DataService } from '../../services/data-service';
import { DatePipe } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { EmptySpace } from '../../../directive/empty-space';
import { Elipse } from "../../../directive/elipse";
import { ValidateDirective } from "../../../directive/validate";
@Component({
  selector: 'app-dashboard',
  imports: [DatePipe, FormsModule, EmptySpace, Elipse, ValidateDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  total!: number;
  completed!: number;
  pending!: number;
  filterData!: Todo[];
  sortData!: Todo[];
  inputText: string = '';
  email: string = ''

  ngOnInit(): void {
    this.getData();
  }

  toDoList!: Todo[];

  constructor(private dataService: DataService) { }

  getData() {
    this.dataService.getData().subscribe((data) => {
      this.toDoList = data;
      this.sortData = data;
      this.total = this.toDoList.length;
      this.completed = this.toDoList.filter((item) => item.completed == true).length;
      this.pending = this.toDoList.filter((item) => item.completed == false).length;
      this.filterData = data.filter((item) => {
        const today = new Date();
        let deadline = new Date(item.deadline);
        if (
          deadline.getFullYear() === today.getFullYear() &&
          deadline.getMonth() === today.getMonth() &&
          deadline.getDay() === today.getDay()
        )
          return item;
        else return false;
      });
      this.sortData.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
      setTimeout(() => {
        this.filterData.forEach((element) => {
          let text = 'Task to complete -- ' + element.text;
          alert(text);
        });
      }, 2000);
    });
  }
}
