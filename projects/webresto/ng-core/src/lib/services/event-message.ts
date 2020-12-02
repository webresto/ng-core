export class EventMessage {

  constructor(public type: string, public title: string, public body: string) { }
  description?: string;
  data?: any;
}
