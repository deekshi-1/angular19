import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Student } from '../../models/student';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputBox implements OnChanges {
  @Input() studentData!: Student;
  @Output() reload = new EventEmitter<any>();
  tempData!: Student;

  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.tempData = { ...this.studentData };
  }

  submit() {
    if (
      this.tempData.name.length > 2 &&
      this.tempData.number.length === 10 &&
      this.tempData.age >= 0 &&
      this.tempData.age <= 100 &&
      this.tempData.mark >= 0 &&
      this.tempData.mark <= 100
    ) {
      if (this.tempData.id) {
        this.dataService.editUser(this.tempData).subscribe(() => {
          this.reload.emit();
          this.clear();
        });
      } else {
        this.dataService.findStudent(this.tempData.name).subscribe((val) => {
          if (val.length) {
            alert('User already exist');
          } else {
            this.dataService.addNewUser(this.tempData).subscribe(() => {
              this.reload.emit();
              this.clear();
            });
          }
        });
      }
    } else {
      alert('Fill the data');
    }
  }

  clear() {
    this.tempData = {
      name: '',
      age: 0,
      number: '',
      mark: 0,
    };
  }
}
