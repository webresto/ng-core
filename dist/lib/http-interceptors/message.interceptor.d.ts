import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { StateService } from "../services/state.service";
export declare class MessageInterceptor implements HttpInterceptor {
    private eventer;
    private state;
    constructor(eventer: EventerService, state: StateService);
    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>>;
}
