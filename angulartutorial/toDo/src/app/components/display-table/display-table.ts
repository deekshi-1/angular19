import { Component } from '@angular/core';
import { InputItem } from '../input-item/input-item';
import { DatePipe, NgClass } from '@angular/common';
import { DataService } from '../../services/data-service';
import { Todo } from '../../interface/todo';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-display-table',
  imports: [InputItem, NgClass, FormsModule, DatePipe],
  templateUrl: './display-table.html',
  styleUrl: './display-table.css',
})
export class DisplayTable {
  toDoList: Todo[] = [];
  toDoFiltered: Todo[] = [];
  completionStatus: string = 'all';
  deadlineStatus: string = 'today';
  cloneData: Object = {
    text: '',
    deadline: '',
  };
  constructor(private dataService: DataService) {
    this.getData();
  }
  clear() {
    this.cloneData = {
      text: '',
      deadline: '',
    };
  }
  refresh() {
    this.getData();
  }
  goToPage(data: string) {}
  getData() {
    this.dataService.getData().subscribe((data) => {
      this.toDoList = data;
      this.changeFilter();
    });
  }

  changeStatus(id: string, data: boolean) {
    this.dataService.changeStatus(id, data).subscribe((item) => {
      this.getData();
    });
  }
  delete(id: string) {
    this.dataService.deletTodo(id).subscribe((item) => {
      this.getData();
    });
  }
  clone(data: any) {
    this.cloneData = {
      text: data.text,
      deadline: data.deadline,
    };
  }
  logout() {
    localStorage.clear();
    this.goToPage('login');
  }
  changeFilter() {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    this.toDoFiltered = this.toDoList;
    if (this.completionStatus != 'all') {
      {
        const boolVal = this.completionStatus === 'true';
        this.toDoFiltered = this.toDoList.filter((item) => item.completed === boolVal);
      }
    }
    switch (this.deadlineStatus) {
      case 'all':
        break;
      case 'today': {
        this.toDoFiltered = this.toDoFiltered.filter((item) => {
          let deadline = new Date(item.deadline);
          if (
            deadline.getFullYear() === today.getFullYear() &&
            deadline.getMonth() === today.getMonth() &&
            deadline.getDay() === today.getDay()
          )
            return item;
          else return false;
        });
        break;
      }
      case 'week': {
        this.toDoFiltered = this.toDoFiltered.filter((item) => {
          let deadline = new Date(item.deadline);
          if (deadline! >= startOfWeek && deadline <= endOfWeek) return item;
          else return false;
        });
        break;
      }
      case 'month': {
        this.toDoFiltered = this.toDoFiltered.filter((item) => {
          let deadline = new Date(item.deadline);
          if (deadline! >= startOfMonth && deadline <= endOfMonth) return item;
          else return false;
        });
        break;
      }
    }
  }
}
