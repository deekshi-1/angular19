import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Dashboard } from './page/dashboard/dashboard';
import { Employees } from './page/employees/employees';
import { CompanyDetail } from './page/company-detail/company-detail';
import { adminGuard, authGuard, EmployerGuard } from './gaurd/auth-guard';
import { Signup } from './page/signup/signup';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: Dashboard,
      },
      { path: 'employer', component: Employees, canActivate: [EmployerGuard], },
      {
        path: 'admin',
        component: CompanyDetail, canActivate: [adminGuard],
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./page/login/login').then((m) => m.Login),
  },
  {
    path: 'registration',
    loadComponent: () => import('./page/signup/signup').then((m) => m.Signup),
  },
];
