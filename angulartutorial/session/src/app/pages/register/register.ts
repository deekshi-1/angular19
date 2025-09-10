import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  user: User = {
    userName: '',
    email: '',
    password: '',
    phone: '',
  };
  @Output() goToPage = new EventEmitter<string>();

  constructor(private dataService: DataService) {}

  submit() {
    if (this.user.userName.length >= 3) {
      if (this.user.password.length >= 4) {
        this.dataService.findUser(this.user.userName).subscribe((val) => {
          if (val.length) alert('Already exist');
          else {
            this.dataService.register(this.user).subscribe((val) => {
              this.goToPage.emit('login');
              alert('User Added');
            });
          }
        });
      } else {
        alert('Password is too short');
      }
    } else {
      alert('Name is too short');
    }
  }
}
