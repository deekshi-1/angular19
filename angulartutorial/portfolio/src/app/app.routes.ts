import { Routes } from '@angular/router';
import { authGaurdGuard } from './auth-gaurd-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'bankingapp',
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
    }, {
      path: 'addProject',
      canActivate: [authGaurdGuard],
      loadComponent: () => import('./pages/add-project/add-project').then((m) => m.AddProject),
    }, {
      path: 'admin',
      canActivate: [authGaurdGuard],
      loadComponent: () => import('./pages/query-page/query-page').then((m) => m.QueryPage),
    }]
  },
  { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) }
];
