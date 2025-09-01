import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  items: string[] = [];
  constructor() {
    let data = localStorage.getItem('todo');
    if (data) {
      this.items = JSON.parse(data);
    }
  }
  getData() {
    let data = localStorage.getItem('todo');
    if (data) {
      this.items = JSON.parse(data);
      return this.items;
    } else return this.items;
  }

  addToDo(data: string) {
    if (this.items.includes(data)) {
      return [];
    } else {
      this.items.push(data);
      localStorage.setItem('todo', JSON.stringify(this.items));
      return this.items;
    }
  }

  removeToDo(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(this.items));
    return this.items;
  }
}
