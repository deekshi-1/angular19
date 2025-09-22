import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBar } from './component/nav-bar/nav-bar';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  imports: [MatSidenavModule, MatButtonModule, NavBar, RouterOutlet, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showFiller = false;
  isDrawerOpen: boolean = false;
  log(data: any) {
    console.log(data);
  }
}
