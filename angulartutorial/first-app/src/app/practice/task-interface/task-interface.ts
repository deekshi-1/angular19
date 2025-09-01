import { Component } from '@angular/core';
import { TaskModel } from '../../../model/task/task-model';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../service/task/task';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-interface',
  imports: [FormsModule, NgClass],
  templateUrl: './task-interface.html',
  styleUrl: './task-interface.css',
})
export class TaskInterface {
  name: string = '';
  description: string = '';
  data!: TaskModel;
  items!: TaskModel[];
  constructor(private taskService: TaskService) {
    this.items = taskService.getData();
  }
  addProduct() {
    this.data = { name: this.name, description: this.description, status: false };
    let result = this.taskService.addTask(this.data);
    if (result.flag) {
      alert('Name already exist');
    } else {
      this.items = result.data;
      this.name = '';
      this.description = '';
    }
  }

  toggleCompletedStatus(index: number) {
    this.items = this.taskService.toggleCompletedStatus(index);
  }
  remove(index: number) {
    this.items = this.taskService.removeTask(index);
  }
}
