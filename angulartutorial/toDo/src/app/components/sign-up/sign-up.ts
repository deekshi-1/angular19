import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data-service';
import { FormsModule } from '@angular/forms';
import { User } from '../../interface/user';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  confirmPassword: string = '';
  user: User = {
    name: '',
    phone: '',
    password: '',
  };
  @Output() goToPage = new EventEmitter<string>();

  constructor(private dataService: DataService) {}

  submit() {
    if (this.user.name.length < 2) {
      alert('Name too short');
    } else {
      if (this.user.phone.length != 10) {
        alert('Number should be 10 digits');
      } else {
        this.dataService.findUser(this.user.phone).subscribe((item) => {
          if (item.length) alert('User already exist');
          else {
            if (this.user.password === this.confirmPassword) {
              this.dataService.register(this.user).subscribe((item) => {
                this.user = {
                  name: '',
                  phone: '',
                  password: '',
                };
                this.goToPage.emit('login');
              });
            } else {
              alert('Password mismatch');
            }
          }
        });
      }
    }
  }
  
  login() {
    this.goToPage.emit('login');
  }
}
