import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { Observable } from 'rxjs';
export declare class MessageInterceptor implements HttpInterceptor {
    private eventer;
    constructor(eventer: EventerService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
