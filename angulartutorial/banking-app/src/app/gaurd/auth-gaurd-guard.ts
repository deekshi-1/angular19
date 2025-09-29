import { CanActivateFn, Router } from '@angular/router';
import { UserServices } from '../services/user/user-services';
import { inject } from '@angular/core';

export const authGaurd: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const dataService = inject(UserServices)
  if (dataService.checkLogin())
    return true;
  else {
    router.navigate(['login'])
    return false;
  }
};
