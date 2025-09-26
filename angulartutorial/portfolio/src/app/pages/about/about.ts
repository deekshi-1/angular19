import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DataServices } from '../../services/data/data-services';

@Component({
  selector: 'app-about',
  imports: [MatCardModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  pageData: any = null

  constructor(private dataService: DataServices) {
    dataService.getaboutData().subscribe(data => {
      this.pageData = data
      console.log(data);
    })
  }
}
