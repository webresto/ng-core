import { ServerErrorInterceptor } from './server-error.interceptor';
export declare const ngCoreHttpInterceptorProviders: {
    provide: import("../../../../../../../../../../Users/user/projects/gfcafe/node_modules/@angular/core/src/di/injection_token").InjectionToken<import("../../../../../../../../../../Users/user/projects/gfcafe/node_modules/@angular/common/http/src/interceptor").HttpInterceptor[]>;
    useClass: typeof ServerErrorInterceptor;
    multi: boolean;
}[];
