import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  toDoUrl: string = 'http://localhost:3000/toDo';
  userUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
  addToDo(data: Todo) {
    return this.http.post(this.toDoUrl, data);
  }

  getData() {
    return this.http.get<Todo[]>(this.toDoUrl);
  }

  changeStatus(id: string, data: boolean) {
    const patch = {
      completed: data,
    };
    return this.http.patch(this.toDoUrl + '/' + id, patch);
  }

  deletTodo(id: string) {
    return this.http.delete(this.toDoUrl + 'unknown/' + id);
  }

  // USER LOGIN AND REGISTER

  findUser(phone: any) {
    return this.http.get<User[]>(this.userUrl + '?phone=' + phone);
  }
  register(data: any) {
    return this.http.post(this.userUrl, data);
  }
}
