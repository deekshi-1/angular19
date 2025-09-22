import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Page1 } from './pages/page1/page1';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'page1', component: Page1 },
  { path: 'page2', component: Home },
  { path: '**', component: NotFound },
];
