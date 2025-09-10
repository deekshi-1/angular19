import { Component, signal } from '@angular/core';
import { Todo } from './interface/todo';
import { DataService } from './services/data-service';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';
import { DisplayTable } from './components/display-table/display-table';
import { Dashboard } from './components/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [Login, SignUp, DisplayTable, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  page: string = 'login';
  homeSection: boolean = true;

  constructor() {
    if (localStorage.getItem('login')) {
      this.page = 'home';
    }
  }

  goToPage(data: string) {
    this.page = data;
  }

  logout() {
    localStorage.clear();
    this.goToPage('login');
  }
  toggle() {
    this.homeSection = !this.homeSection;
  }
}
