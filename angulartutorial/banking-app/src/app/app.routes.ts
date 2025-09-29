import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { authGaurd } from './gaurd/auth-gaurd-guard';

export const routes: Routes = [{
  path: '',
  redirectTo: 'banking',
  pathMatch: 'full',
},
{ path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) },
{ path: 'signup', loadComponent: () => import('./pages/signup/signup').then((m) => m.Signup) }, {
  path: 'banking',
  component: Home,
  canActivate: [authGaurd],
  children: [
    { path: "", loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard) },
    { path: "credit", loadComponent: () => import('./pages/credit/credit').then((m) => m.Credit) },
    { path: "debit", loadComponent: () => import('./pages/debit/debit').then((m) => m.Debit) },
    { path: "transaction", loadComponent: () => import('./pages/transactions/transactions').then((m) => m.Transactions) }
  ]
}];
