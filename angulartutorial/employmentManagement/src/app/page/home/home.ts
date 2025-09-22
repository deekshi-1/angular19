import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router, private route: ActivatedRoute) {}

  goTo(page: string) {
    this.router.navigate([page], { relativeTo: this.route });
  }
}
