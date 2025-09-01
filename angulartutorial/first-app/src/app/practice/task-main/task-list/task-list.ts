import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-task-list',
  imports: [NgClass],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Output() addCompleted = new EventEmitter<any>();
  @Input() tasks: any = [];
  @Output() rmCompleted = new EventEmitter<any>();
  removeFav(data: string) {
    this.rmCompleted.emit(data);
  }
  addToFav(data: string) {
    this.addCompleted.emit(data);
  }
}
