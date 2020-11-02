import { NgModule } from '@angular/core';
import { WebStorageModule } from 'ngx-store';
import { ngCoreHttpInterceptorProviders } from './http-interceptors';

@NgModule({
  imports: [WebStorageModule],
  declarations: [],
  providers:[ngCoreHttpInterceptorProviders],
  exports: []
})
export class NgCoreModule { }
