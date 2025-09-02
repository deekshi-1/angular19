import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fav-list',
  imports: [],
  templateUrl: './fav-list.html',
  styleUrl: './fav-list.css',
})
export class FavList {
  @Input() favList: string[] = [];
  @Output() rmFav = new EventEmitter<string>();
  removeFav(data: string) {
    this.rmFav.emit(data);
  }
}
