import { Config } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class NetService {
    private http;
    config: any;
    constructor(http: HttpClient, config: Config);
    get(url: string, isApi?: boolean): Observable<any>;
    put(url: string, data: any, isApi?: boolean): Observable<any>;
    post(url: string, data: any, isApi?: boolean): Observable<any>;
}
