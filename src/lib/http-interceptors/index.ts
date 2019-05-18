import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServerErrorInterceptor } from './server-error.interceptor';
import { MessageInterceptor } from "./message.interceptor";


export const ngCoreHttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: MessageInterceptor, multi: true }
];

