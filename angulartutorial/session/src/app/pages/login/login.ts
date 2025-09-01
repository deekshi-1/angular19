import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user = {
    name: '',
    password: '',
  };

  @Output() goToPage = new EventEmitter<string>();
  @Output() loginData = new EventEmitter<any>();
  goToRegister() {
    this.goToPage.emit('register');
  }
  login() {
    if (this.user.name.length >= 3) {
      if (this.user.password.length >= 4) {
        this.loginData.emit(this.user);
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  }
}
