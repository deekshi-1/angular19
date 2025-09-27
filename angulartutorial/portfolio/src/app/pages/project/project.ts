import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { DataServices } from '../../services/data/data-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [MatCardModule, MatButtonModule, MatIcon, RouterLink],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {
  pageData: any = null
  role: string = ''

  constructor(private dataService: DataServices) {
    dataService.getProjectData().subscribe(data => {
      this.pageData = data
      console.log(data);
    })
    this.role = localStorage.getItem('role') || ''
  }
}
