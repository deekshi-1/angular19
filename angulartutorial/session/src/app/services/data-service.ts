import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  users!: User[];
  loggedUser: string = '';

  constructor() {
    let data = localStorage.getItem('users');
    this.users = data ? JSON.parse(data) : this.users;
    this.loggedUser = localStorage.getItem('loggedUser') || ' ';
  }

  getusers() {
    let data = localStorage.getItem('users');
    this.users = data ? JSON.parse(data) : this.users;
    return this.users;
  }
  getLoggedUser() {
    this.loggedUser = localStorage.getItem('loggedUser') || ' ';
    return this.loggedUser;
  }

  setLoggedUser(data: string) {}

  register(data: any) {
    let found = false;
    this.users.forEach((element: any) => {
      if (element.name == data.name) {
        found = true;
      }
    });
    if (found) {
      return false;
    } else {
      this.users.push(data);
      localStorage.setItem('users', JSON.stringify(this.users));
      return true;
    }
  }

  login(data: any) {
    let found = false;
    this.users.forEach((element: any) => {
      if (element.name == data.name) {
        data.password == element.password;
        found = true;
      }
    });
    if (!found) {
      return false;
    } else {
      localStorage.setItem('loggedUser', data.name);
      return true;
    }
  }

  logout() {
    localStorage.removeItem('loggedUser');
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
