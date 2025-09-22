import { Routes } from '@angular/router';
import { App } from './app';
import { Login } from './page/login/login';
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
    component: Login,
  },
  {
    path: 'registration',
    component: Signup,
  },
];
