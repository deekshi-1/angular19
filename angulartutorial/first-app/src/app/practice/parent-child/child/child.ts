import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrls: ['./child.css','../parent-child.css'],
})
export class Child {
  name: string = '';
  mark: number = 0;
  course: string = '';
  @Output() dataEvent = new EventEmitter<{ name: string; course: string; mark: number | null }>();
  clear() {
    this.name = '';
    this.mark = 0;
    this.course = '';
  }
  submit() {
    if (this.name.length > 3) {
      if (this.mark >= 0 && this.mark <= 100) {
        if (this.course != '' && this.course.length > 3) {
          this.dataEvent.emit({
            name: this.name,
            course: this.course,
            mark: this.mark,
          });
        } else {
          alert('Need a course');
        }
      } else {
        alert('Invalid marks');
      }
    } else {
      alert('Name is too short');
    }
  }
}
