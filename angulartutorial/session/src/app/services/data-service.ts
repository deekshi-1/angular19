import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userUrl = 'http://localhost:3000/users';
  studentUrl = 'http://localhost:3000/students';
  users!: User[];
  loggedUser: string = '';

  constructor(private http: HttpClient) {
    let data = localStorage.getItem('users');
    this.users = data ? JSON.parse(data) : this.users;
    this.loggedUser = localStorage.getItem('loggedUser') || ' ';
  }

  findUser(userName: string) {
    return this.http.get<User[]>(this.userUrl + '?userName=' + userName);
  }

  findStudent(userName: string) {
    return this.http.get<User[]>(this.studentUrl + '?name=' + userName);
  }

  register(data: User) {
    return this.http.post(this.userUrl, data);
  }

  login(data: any) {
    return this.http.get<User[]>(
      this.userUrl + '?userName=' + data.userName + '&password=' + data.password
    );
  }

  getStudents() {
    return this.http.get<Student[]>(this.studentUrl);
  }

  addNewUser(data: Student) {
    return this.http.post(this.studentUrl, data);
  }

  editUser(data: Student) {
    return this.http.put(this.studentUrl + '/' + data.id, data);
  }

  logout() {
    localStorage.removeItem('loggedUser');
  }

  removeStudent(data: Student) {
    return this.http.delete(this.studentUrl + '/' + data.id);
  }
}
