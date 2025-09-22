import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Async {
  data = [{
    "id": 1,
    "first_name": "Tiler",
    "email": "thobben0@hp.com"
  }, {
    "id": 2,
    "first_name": "Sebastien",
    "email": "snutter1@shinystat.com"
  }, {
    "id": 3,
    "first_name": "Pandora",
    "email": "pdunbobin2@google.co.jp"
  }, {
    "id": 4,
    "first_name": "Olenka",
    "email": "obowater3@360.cn"
  }, {
    "id": 5,
    "first_name": "Roxine",
    "email": "rseeler4@marketwatch.com"
  }, {
    "id": 6,
    "first_name": "Fulvia",
    "email": "facomb5@reference.com"
  }, {
    "id": 7,
    "first_name": "Devin",
    "email": "dmalham6@skyrock.com"
  }, {
    "id": 8,
    "first_name": "Winslow",
    "email": "whedman7@marketwatch.com"
  }, {
    "id": 9,
    "first_name": "Elsi",
    "email": "eligertwood8@tiny.cc"
  }]

  async getData(): Promise<any[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }
}
