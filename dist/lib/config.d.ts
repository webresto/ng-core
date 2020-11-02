import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class Config {
    url: any;
    port: number;
    prefix: string;
    versionModule: string;
    constructor(endpointUrl: BehaviorSubject<any>);
    static ɵfac: i0.ɵɵFactoryDef<Config, never>;
    static ɵprov: i0.ɵɵInjectableDef<Config>;
}
