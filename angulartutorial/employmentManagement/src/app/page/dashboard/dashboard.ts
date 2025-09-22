import { Component } from '@angular/core';
import { DataService } from '../../servicess/data-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  total!: number;

  constructor(private dataService: DataService) {
    dataService.getData().subscribe((item) => {
      this.total = item.length;
    });
  }
}
