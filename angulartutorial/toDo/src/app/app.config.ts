  import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZoneChangeDetection,
  } from '@angular/core';
  import { provideRouter } from '@angular/router';

  import { routes } from './app.routes';
  import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
  import { DatePipe } from '@angular/common';
  import { requestInterceptor } from './interceptor/request-interceptor';

  export const appConfig: ApplicationConfig = {
    providers: [
      provideBrowserGlobalErrorListeners(),
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideHttpClient(withInterceptors([requestInterceptor])),
    ],
  };
