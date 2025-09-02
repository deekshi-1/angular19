import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoService } from '../../service/toDo/to-doservice';
import { FavService } from '../../service/fav/fav-service';

@Component({
  selector: 'app-todo-main',
  imports: [FormsModule],
  templateUrl: './todo-main.html',
  styleUrl: './todo-main.css',
})
export class TodoMain {
  todo: string = '';
  items: string[] = [];
  favList: string[] = [];
  constructor(private toDoService: ToDoService, private favservice: FavService) {
    this.items = toDoService.getData();
    this.favList = favservice.getData();
  }

  add() {
    if (this.todo.length < 3) {
      alert('toDo too short');
    } else {
      let result = this.toDoService.addToDo(this.todo);
      if (result.length == 0) {
        alert('Item already exist');
      } else {
        this.items = result;
        this.todo = '';
      }
    }
  }

  remove(index: number) {
    this.removeFav(this.items[index]);
    this.items = this.toDoService.removeToDo(index);
  }

  addToFav(item: string) {
    this.favList = this.favservice.addfav(item);
  }
  removeFav(item: string) {
    let index = this.favList.indexOf(item);
    this.favList = this.favservice.removefav(index);
  }
}
