import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-items-list',
  imports: [],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
   @Input() items: string[] = [];
  @Input() favList: string[] = [];
  @Output() addFav = new EventEmitter<string>();
  @Output() rmFav = new EventEmitter<string>();
  removeFav(data: string) {
    this.rmFav.emit(data);
  }
  addToFav(data: string) {
    this.addFav.emit(data);
  }
  
}
