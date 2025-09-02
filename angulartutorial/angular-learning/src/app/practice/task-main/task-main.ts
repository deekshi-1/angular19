import { Component } from '@angular/core';
import { TaskList } from './task-list/task-list';
import { CompletedTask } from './completed-task/completed-task';

@Component({
  selector: 'app-task-main',
  imports: [TaskList, CompletedTask],
  templateUrl: './task-main.html',
  styleUrl: './task-main.css',
})
export class TaskMain {
  filterflag: boolean = false;
  tasks = [
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: true },
    { name: 'Task 3', completed: false },
    { name: 'Task 4', completed: true },
    { name: 'Task 5', completed: true },
    { name: 'Task 6', completed: false },
    { name: 'Task 7', completed: true },
    { name: 'Task 8', completed: true },
    { name: 'Task 9', completed: true },
    { name: 'Task 10', completed: false },
    { name: 'Task 11', completed: true },
  ];

  constructor() {
    let data = localStorage.getItem('tasks');
    this.tasks = data ? JSON.parse(data) : this.tasks;
  }

  toggleView() {
    this.filterflag = !this.filterflag;
  }
  rmCompleted(data: any) {
    let index = this.tasks.indexOf(data);
    if (index == -1) {
      alert('Not in list');
    } else {
      this.tasks[index].completed = false;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  addCompleted(data: any) {
    let index = this.tasks.indexOf(data);
    if (index == -1) {
      alert('Not in list');
    } else {
      this.tasks[index].completed = true;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
