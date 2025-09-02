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
  users!: User[];
  currentUser: string = '';
  constructor(private dataService: DataService) {
    this.users = dataService.getusers();
    this.currentUser = dataService.getLoggedUser();
    if (this.currentUser.length > 2) {
      this.page = 'home';
    }
  }
  switchPage(value: string) {
    this.page = value;
  }
  registerUser(userData: any) {
    let returnVal = this.dataService.register(userData);
    if (returnVal) {
      this.page = 'login';
    } else {
      alert('Student already exist');
    }
  }

  signIn(userData: any) {
    let found = this.dataService.login(userData);
    if (!found) {
      alert('No user found');
    } else {
      this.page = 'home';
      this.currentUser = this.dataService.getLoggedUser();
    }
  }

  logout() {
    this.dataService.logout();
    this.switchPage('login');
  }
}
