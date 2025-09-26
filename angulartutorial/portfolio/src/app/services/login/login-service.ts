import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = environment.apiUrl
  admin = {
    email: "  ",
    password: '1234'
  }
  constructor(private http: HttpClient) { }

  checkLogin(data: any) {
    return this.http.get<any[]>(this.api + 'auth?email=' + data.email + '&password=' + data.password)
  }
}
