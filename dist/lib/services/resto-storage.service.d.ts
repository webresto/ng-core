import { Observable, BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class RestoStorageService {
    event: BehaviorSubject<any>;
    constructor();
    initTypeStorage(): void;
    get(typeStorage: string, key: string): string;
    set(typeStorage: string, key: string, value: string): Observable<any>;
    sub(typeStorage: string, key: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<RestoStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDef<RestoStorageService>;
}
//# sourceMappingURL=resto-storage.service.d.ts.map