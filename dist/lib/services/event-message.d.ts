export declare class EventMessage {
    type: string;
    title: string;
    body: string;
    constructor(type: string, title: string, body: string);
    description?: string;
    data?: any;
}
