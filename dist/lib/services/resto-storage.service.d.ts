import { Observable, BehaviorSubject } from 'rxjs';
export declare class RestoStorageService {
    event: BehaviorSubject<any>;
    [typeStorage: string]: any;
    constructor();
    initTypeStorage(): void;
    get(typeStorage: string, key: string): string;
    set(typeStorage: string, key: string, value: string): Observable<any>;
    sub(typeStorage: string, key: string): Observable<any>;
}
