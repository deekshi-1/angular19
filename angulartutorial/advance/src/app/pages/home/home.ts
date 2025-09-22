  import { Component } from '@angular/core';
  import { MatButtonModule } from '@angular/material/button';
  import { MatCardModule } from '@angular/material/card';
  import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

  @Component({
    selector: 'app-home',
    imports: [MatCardModule, MatButtonModule, NgbCarouselModule],
    templateUrl: './home.html',
    styleUrl: './home.css',
  })
  export class Home {
    images = [943, 911, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }
