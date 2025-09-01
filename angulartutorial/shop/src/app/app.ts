import { Component, signal } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products!: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getData();
  }
}
