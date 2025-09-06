import { Component } from '@angular/core';
import { ReversePipe } from '../../pipes/reverse-pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter-pipe';
import { ShortenPipe } from '../../pipes/shorten-pipe';
import { SortPipe } from '../../pipes/sort-pipe';

@Component({
  selector: 'app-pipes',
  imports: [ReversePipe, FormsModule, FilterPipe, ShortenPipe,SortPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  string1: string = 'hello';
  filterArray: string[] = ['Arjun', 'Arun', 'Rahul', 'Jishnu'];
  filterString: string = '';
  string2: string = '';
  length: number = 0;
  users = [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'Bob', age: 20 },
  ];
}
