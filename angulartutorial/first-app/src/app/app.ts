import { Component, signal } from '@angular/core';
import { ParentChild } from './practice/parent-child/parent-child';
import { FavListhome } from "./practice/fav-listhome/fav-listhome";
import { TaskMain } from "./practice/task-main/task-main";
import { TodoMain } from "./practice/todo-main/todo-main";
@Component({
  selector: 'app-root',
  imports: [ TodoMain],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
