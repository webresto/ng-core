import { BehaviorSubject } from 'rxjs';
export declare class Config {
    url: any;
    port: number;
    prefix: string;
    versionModule: string;
    constructor(endpointUrl: BehaviorSubject<any>);
}
