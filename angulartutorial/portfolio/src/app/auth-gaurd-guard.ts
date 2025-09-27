import { CanActivateFn, Router } from '@angular/router';
import { DataServices } from './services/data/data-services';
import { inject } from '@angular/core';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const dataService = inject(DataServices)
  if (dataService.checkAdmin())
    return true;
  else {
    router.navigate(['/home'])
    return false;
  }
};
