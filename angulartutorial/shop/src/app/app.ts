import { Component, signal } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from '../services/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products!: Product[];
  filterProduct!: Product[];
  filterString: string = '';

  constructor(private productService: ProductService) {
    this.products = this.productService.getData();
    this.filterProduct = this.products;
  }

  filterProducts() {
    this.filterProduct = this.products.filter((item) =>
      item.name.toLocaleLowerCase().includes(this.filterString.toLocaleLowerCase())
    );
  }
}
