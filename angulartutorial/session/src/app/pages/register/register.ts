import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  user!: User;
  @Output() registernData = new EventEmitter<User>();
  submit() {
    if (this.user.name.length >= 3) {
      if (this.user.password.length >= 4) {
        this.registernData.emit(this.user);
      } else {
        alert('Password is too short');
      }
    } else {
      alert('Name is too short');
    }
  }
}
