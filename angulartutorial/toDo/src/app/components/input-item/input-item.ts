import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data-service';
import { Todo } from '../../interface/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-item',
  imports: [FormsModule],
  templateUrl: './input-item.html',
  styleUrl: './input-item.css',
})
export class InputItem implements OnChanges {
  @Output() refresh = new EventEmitter();
  @Output() clearClone = new EventEmitter();
  @Input() cloneData!: any;

  constructor(private dataService: DataService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cloneData'] && this.cloneData) {
      let deadline: string = '';

      if (this.cloneData.deadline) {
        const parsedDate = new Date(this.cloneData.deadline);
        if (!isNaN(parsedDate.getTime())) {
          deadline = parsedDate.toISOString().split('T')[0];
        } else {
          console.warn('Invalid deadline format:', this.cloneData.deadline);
        }
      }

      this.inputData = {
        text: this.cloneData.text,
        deadline: deadline,
      };
    }
  }

  today: string = new Date().toISOString().split('T')[0];
  inputData = {
    text: '',
    deadline: '',
  };

  submit() {
    let data: Todo = {
      text: this.inputData.text,
      createdDate: new Date(),
      deadline: new Date(this.inputData.deadline),
      completed: false,
    };
    this.dataService.addToDo(data).subscribe((item) => {
      this.clear();
      this.refresh.emit();
    });
  }
  clear() {
    this.inputData = {
      text: '',
      deadline: '',
    };
  }
}
