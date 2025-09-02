import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavService {
  favList: string[] = [];
  constructor() {
    let data = localStorage.getItem('fav');
    if (data) {
      this.favList = JSON.parse(data);
    }
  }
  getData() {
    let data = localStorage.getItem('fav');
    if (data) {
      this.favList = JSON.parse(data);
      return this.favList;
    } else return this.favList;
  }

  addfav(data: string) {
    this.favList.push(data);
    localStorage.setItem('fav', JSON.stringify(this.favList));
    return this.favList;
  }

  removefav(index: number) {
    this.favList.splice(index, 1);
    localStorage.setItem('fav', JSON.stringify(this.favList));
    return this.favList;
  }
}
