import { Component } from '@angular/core';
import { FavList } from './fav-list/fav-list';
import { ItemsList } from './items-list/items-list';

@Component({
  selector: 'app-fav-listhome',
  imports: [FavList, ItemsList],
  templateUrl: './fav-listhome.html',
  styleUrl: './fav-listhome.css',
})
export class FavListhome {
  items: string[] = [
    'To Kill a Mockingbird',
    '1984',
    'The Great Gatsby',
    'Pride and Prejudice',
    'Moby-Dick',
    'War and Peace',
    'The Catcher in the Rye',
    'The Lord of the Rings',
    'Jane Eyre',
    'Crime and Punishment',
  ];
  favList: string[] = [];
  constructor() {
    let data = localStorage.getItem('favList');
    this.favList = data ? JSON.parse(data) : [];
  }
  removeFav(data: string) {
    let index = this.favList.indexOf(data);
    if (index == -1) {
      alert('Not in list');
    } else {
      this.favList.splice(index, 1);
      localStorage.setItem('favList', JSON.stringify(this.favList));
    }
  }
  addFav(data: string) {
    if (this.favList.includes(data)) {
      alert('already exist');
    } else {
      this.favList.push(data);
      localStorage.setItem('favList', JSON.stringify(this.favList));
    }
  }
}
