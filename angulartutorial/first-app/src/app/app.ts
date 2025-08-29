import { Component, signal } from '@angular/core';
import { ParentChild } from './practice/parent-child/parent-child';

@Component({
  selector: 'app-root',
  imports: [ParentChild],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
