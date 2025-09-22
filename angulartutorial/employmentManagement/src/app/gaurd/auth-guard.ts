import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../servicess/data-service';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const dataService = inject(DataService)
  if (dataService.checkLogin())
    return true;
  else {
    router.navigate(['login'])
    return false;
  }
};

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const dataService = inject(DataService)
  if (dataService.checkAdmin())
    return true;
  else {
    router.navigate(['/home'])
    return false;
  }
};

export const EmployerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const dataService = inject(DataService)
  if (dataService.checkEmployer())
    return true;
  else {
    router.navigate(['/home'])
    return false;
  }
};