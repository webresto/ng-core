import { ServerErrorInterceptor } from './server-error.interceptor';
<<<<<<< HEAD
import { MessageInterceptor } from "./message.interceptor";
export declare const ngCoreHttpInterceptorProviders: ({
    provide: import("../../../../../../../../../../Users/user/projects/gfcafe/node_modules/@angular/core/src/di/injection_token").InjectionToken<import("../../../../../../../../../../Users/user/projects/gfcafe/node_modules/@angular/common/http/src/interceptor").HttpInterceptor[]>;
=======
export declare const ngCoreHttpInterceptorProviders: {
    provide: import("@angular/core/src/di/injection_token").InjectionToken<import("@angular/common/http/src/interceptor").HttpInterceptor[]>;
>>>>>>> 222cd7b78e4de185ae94ef43dd498c46c510505e
    useClass: typeof ServerErrorInterceptor;
    multi: boolean;
} | {
    provide: import("../../../../../../../../../../Users/user/projects/gfcafe/node_modules/@angular/core/src/di/injection_token").InjectionToken<import("../../../../../../../../../../Users/user/projects/gfcafe/node_modules/@angular/common/http/src/interceptor").HttpInterceptor[]>;
    useClass: typeof MessageInterceptor;
    multi: boolean;
})[];
