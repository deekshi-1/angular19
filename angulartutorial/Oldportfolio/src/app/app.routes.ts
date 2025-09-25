import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  { path: 'about', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'project', loadComponent: () => import('./pages/project/project').then((m) => m.Project) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact ) },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound )  },
];
