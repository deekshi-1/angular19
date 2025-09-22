import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userUrl: string = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Employee[]>(this.userUrl);
  }

  setLocal(data: Employee) {
    localStorage.setItem('login', 'true');
    localStorage.setItem('role', data.role ? data.role : 'null');
  }

  getLocal() {
    const login = localStorage.getItem('login');
    const role = localStorage.getItem('role');
  }

  checkEmployer() {
    const role = localStorage.getItem('role');
    if (role == "employer" || role == "admin") {
      return true;
    }
    else {
      return false
    }
  }
  checkAdmin() {
    const role = localStorage.getItem('role');
    if (role == "admin") {
      return true;
    }
    else {
      return false
    }
  }

  checkLogin() {
    const login = localStorage.getItem('login');
    if (login) {
      return true;
    }
    else {
      return false
    }
  }
  // USER LOGIN AND REGISTER
  findUserExist(email: any) {
    return this.http.get<Employee[]>(
      this.userUrl + '?email=' + email
    );
  }
  findUser(data: any) {
    return this.http.get<Employee[]>(
      this.userUrl + '?email=' + data.email + '&password=' + data.password
    );
  }

  register(data: Employee) {
    return this.http.post(this.userUrl, data);
  }

  logout() {
    localStorage.removeItem('role'); localStorage.removeItem('login')
  }
}
