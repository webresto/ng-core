import { ServerErrorInterceptor } from './server-error.interceptor';
import { MessageInterceptor } from "./message.interceptor";
export declare const ngCoreHttpInterceptorProviders: ({
    provide: import("@angular/core/src/di/injection_token").InjectionToken<import("@angular/common/http/src/interceptor").HttpInterceptor[]>;
    useClass: typeof ServerErrorInterceptor;
    multi: boolean;
} | {
    provide: import("@angular/core/src/di/injection_token").InjectionToken<import("@angular/common/http/src/interceptor").HttpInterceptor[]>;
    useClass: typeof MessageInterceptor;
    multi: boolean;
})[];
