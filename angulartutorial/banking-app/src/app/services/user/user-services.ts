import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { UserInterface } from '../../interfaces/user-interface';
@Injectable({
  providedIn: 'root'
})
export class UserServices {

  constructor(private http: HttpClient) { }
  api = environment.apiUserUrl;
  login(data: any) {
    return this.http.get<any[]>(this.api + '?email=' + data.email + '&password=' + data.password)
  }

  checkUser(email: string) {
    return this.http.get<any[]>(this.api + '?email=' + email)
  }

  register(data: any) {
    return this.http.post(this.api, data)
  }

  checkAcc(accNo: number) {
    return this.http.get<UserInterface[]>(this.api + '?accNo=' + accNo)
  }

  update(id: string, data: any) {
    console.log(data);

    return this.http.patch<UserInterface>(this.api + '/' + id, data)
  }

  checkLogin() {
    let response = localStorage.getItem('user')
    if (response && response.length == 10) return true
    else return false;
  }
}