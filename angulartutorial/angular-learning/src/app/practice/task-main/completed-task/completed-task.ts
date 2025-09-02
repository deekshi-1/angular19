import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-completed-task',
  imports: [NgClass],
  templateUrl: './completed-task.html',
  styleUrl: './completed-task.css',
})
export class CompletedTask {
  @Input() tasks: any = [];
  @Output() rmCompleted = new EventEmitter<any>();
  removeFav(data: string) {
    this.rmCompleted.emit(data);
  }
}
