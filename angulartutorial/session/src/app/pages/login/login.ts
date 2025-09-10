import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user = {
    userName: '',
    password: '',
  };

  @Output() goToPage = new EventEmitter<string>();

  constructor(private dataService: DataService) {}

  goToRegister() {
    this.goToPage.emit('register');
  }
  
  login() {
    if (this.user.userName.length >= 3) {
      if (this.user.password.length >= 4) {
        this.dataService.login(this.user).subscribe((val) => {
          if (val.length) {
            alert('Loggin In');
            localStorage.setItem('login', val[0].userName);
            this.goToPage.emit('home');
          } else {
            alert('Invalid Credentials');
          }
        });
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  }
}
