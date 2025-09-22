import { Routes } from '@angular/router';
import { SignUp } from './components/sign-up/sign-up';
import { Login } from './components/login/login';
import { App } from './app';
import { authGuard } from './gaurd/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: App,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: SignUp,
  },
];
