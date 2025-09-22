import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, delay, retry, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const modified = req.clone({
    setHeaders: {
      'Authorization': `34343`
    }
  });

  const router = inject(Router);
  const startTime = Date.now();

  return next(modified).pipe(
    delay(500),
    retry(2),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        router.navigate(['login']);
      }
      return throwError(() => error);
    }),
    finalize(() => {
      const reqTime = Date.now() - startTime;
      console.log(`Request to ${req.url} took ${reqTime}ms`);
    })
  );
};
