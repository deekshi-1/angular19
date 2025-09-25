import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    children: [{
      path: '',
      redirectTo: 'about', pathMatch: 'full'
    }, {
      path: 'about',
      loadComponent: () => import('./pages/about/about').then((m) => m.About),
    }, {
      path: 'project',
      loadComponent: () => import('./pages/project/project').then((m) => m.Project),
    }, {
      path: 'contact',
      loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    }]
  },
  { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) }
];
