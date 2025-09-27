import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  role = signal<string>('');
  constructor(private router: Router, private route: ActivatedRoute) {
    const savedRole = localStorage.getItem('role');
    if (savedRole) {
      this.role.set(savedRole);
    }
  }


  goTo(page: string) {
    this.router.navigate([page], { relativeTo: this.route });
  }
  logout() {
    localStorage.removeItem('role')
    this.role.set('');

    this.goTo('')
  }
}
