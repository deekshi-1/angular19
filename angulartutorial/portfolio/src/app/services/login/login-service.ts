import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  admin = {
    email: "abc@aa.in",
    password: '1234'
  }

  checkLogin(data: any) {
    if (data.email == this.admin.email && data.password == this.admin.password) {
      return true
    }
    else return false;
  }
}
