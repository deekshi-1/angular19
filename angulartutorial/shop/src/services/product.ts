import { Injectable } from '@angular/core';
import { Product } from '../app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      name: 'organic honey',
      price: 250,
      mfgDate: 'Feb 25',
      expDate: 'Feb 28',
      description: 'natural sweetener',
    },
    {
      name: 'basmati rice',
      price: 120,
      mfgDate: 'Mar 25',
      expDate: 'Mar 27',
      description: 'long grain, aromatic',
    },
    {
      name: 'olive oil',
      price: 350,
      mfgDate: 'Apr 25',
      expDate: 'Apr 26',
      description: 'extra virgin, cooking',
    },
    {
      name: 'black tea bags',
      price: 75,
      mfgDate: 'May 25',
      expDate: 'May 27',
      description: 'classic breakfast tea',
    },
    {
      name: 'canned tomatoes',
      price: 60,
      mfgDate: 'Jun 25',
      expDate: 'Jun 27',
      description: 'whole peeled tomatoes',
    },
    {
      name: 'coffee beans',
      price: 400,
      mfgDate: 'Jul 25',
      expDate: 'Jul 26',
      description: 'roasted, whole beans',
    },
    {
      name: 'sugar',
      price: 50,
      mfgDate: 'Aug 25',
      expDate: 'Aug 28',
      description: 'granulated white sugar',
    },
    {
      name: 'salt',
      price: 25,
      mfgDate: 'Sep 25',
      expDate: 'Sep 30',
      description: 'iodized table salt',
    },
    {
      name: 'oats',
      price: 95,
      mfgDate: 'Oct 25',
      expDate: 'Oct 26',
      description: 'rolled oats for breakfast',
    },
    {
      name: 'lentils',
      price: 110,
      mfgDate: 'Nov 25',
      expDate: 'Nov 27',
      description: 'red lentils, dried',
    },
  ];

  getData(): Product[] {
    return this.products;
  }
}
