import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user = {
    phone: '',
    password: '',
  };

  @Output() goToPage = new EventEmitter<string>();

  constructor(private dataService: DataService) {}

  goToRegister() {
    this.goToPage.emit('signUp');
  }

  login() {
    this.dataService.findUser(this.user.phone).subscribe((item) => {
      if (item.length) {
        if (item[0].password === this.user.password) {
          localStorage.setItem('login', 'true');
          this.goToPage.emit('home');
        } else alert('Password Incorrect');
      } else alert('User doesnt exist');
    });
  }
}
