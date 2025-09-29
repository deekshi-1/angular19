import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Credit } from './pages/credit/credit';
import { Debit } from './pages/debit/debit';
import { Transactions } from './pages/transactions/transactions';
import { authGaurd } from './gaurd/auth-gaurd-guard';

export const routes: Routes = [{
  path: '',
  redirectTo: 'banking',
  pathMatch: 'full',
},
{ path: 'login', component: Login },
{ path: 'signup', component: Signup }, {
  path: 'banking',
  component: Home,
  canActivate: [authGaurd],
  children: [
    { path: "", component: Dashboard },
    { path: "credit", component: Credit },
    { path: "debit", component: Debit },
    { path: "transaction", component: Transactions }
  ]
}];
