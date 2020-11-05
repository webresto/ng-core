import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { StateService } from "../services/state.service";
import * as i0 from "@angular/core";
export declare class MessageInterceptor implements HttpInterceptor {
    private eventer;
    private state;
    constructor(eventer: EventerService, state: StateService);
    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<MessageInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<MessageInterceptor>;
}
//# sourceMappingURL=message.interceptor.d.ts.map