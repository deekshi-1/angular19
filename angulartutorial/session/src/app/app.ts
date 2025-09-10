import { Component } from '@angular/core';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { DataService } from './services/data-service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  imports: [Home, Login, Register],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  page: string = 'login';
  users!: User[];;
  constructor(private dataService: DataService) {
  }
  switchPage(value: string) {
    this.page = value;
  }

  logout() {
    this.dataService.logout();
    this.switchPage('login');
  }
}
