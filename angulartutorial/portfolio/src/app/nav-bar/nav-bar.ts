import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  constructor(private router: Router, private route: ActivatedRoute) { }

  goTo(page: string) {
    this.router.navigate([page], { relativeTo: this.route });
  }
}
