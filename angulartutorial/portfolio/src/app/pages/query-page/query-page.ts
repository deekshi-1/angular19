import { Component } from '@angular/core';
import { DataServices } from '../../services/data/data-services';
import { MatCardModule } from "@angular/material/card";
import { PhoneDirective } from "../../directive/phone";

@Component({
  selector: 'app-query-page',
  imports: [MatCardModule, PhoneDirective],
  templateUrl: './query-page.html',
  styleUrl: './query-page.scss'
})
export class QueryPage {
  pageData: any = null;
  constructor(private dataService: DataServices) {
    dataService.getQuerryData().subscribe(item => {
      this.pageData = item; console.log(this.pageData);
    })

  }
}
