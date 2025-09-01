import { Injectable } from '@angular/core';
import { TaskModel } from '../../model/task/task-model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks!: TaskModel[];

  constructor() {
    let data = localStorage.getItem('tasks');
    if (data) {
      this.tasks = JSON.parse(data);
    } else {
      this.tasks = [];
    }
  }

  getSerialNo(): any {
    let i = Math.floor(1000 + Math.random() * 9000);
    let flag = false;
    for (let index = 0; index < this.tasks.length; index++) {
      if (i == this.tasks[index].id) {
        flag = true;
        break;
      }
    }
    if (flag) {
      return this.getSerialNo();
    } else {
      return i;
    }
  }

  getData() {
    return this.tasks;
  }

  addTask(data: TaskModel) {
    let flag = false;
    for (let index = 0; index < this.tasks.length; index++) {
      if (data.name == this.tasks[index].name) {
        flag = true;
      }
    }
    if (flag) {
      return { flag: true, data: [] };
    } else {
      data.id = this.getSerialNo();
      this.tasks.push(data);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      return { flag: false, data: this.tasks };
    }
  }
  toggleCompletedStatus(index: number): TaskModel[] {
    this.tasks[index].status = !this.tasks[index].status;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    return this.tasks;
  }

  removeTask(index: number): TaskModel[] {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    return this.tasks;
  }
}
