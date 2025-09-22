import { Component } from '@angular/core';
import { PaginationService } from '../../services/pagination-service';
import { MovieInterface } from '../../interface/movie-interface';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  imports: [NgClass, FormsModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  data!: MovieInterface[];
  inputData: number = 0;
  pages: number = 0;
  currentPage: number = 1;
  pageItems!: number[];
  displayData!: MovieInterface[];
  constructor(private pageService: PaginationService) {
    this.data = pageService.getData();
    if (this.data) {
      this.pages = Math.ceil(this.data.length / 10);
      this.pageItems = Array.from({ length: this.pages }, (_, i) => i + 1);
    }
    this.slicePage(this.currentPage);
  }

  slicePage(pageNo: number) {
    if (pageNo < 1) {
      pageNo = 1;
      this.currentPage = pageNo;
      this.displayData = this.data.slice((pageNo - 1) * 10, pageNo * 10);
      alert('Invalid input');
    }
    if (pageNo > this.pageItems.length) {
      pageNo = this.pageItems.length;
      this.currentPage = pageNo;
      this.displayData = this.data.slice((pageNo - 1) * 10, pageNo * 10);
      alert('Input out of range');
    } else {
      this.currentPage = pageNo;
      this.displayData = this.data.slice((pageNo - 1) * 10, pageNo * 10);
    }
  }
}
