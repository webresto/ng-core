import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServerErrorInterceptor } from './server-error.interceptor';

export const ngCoreHttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
];

