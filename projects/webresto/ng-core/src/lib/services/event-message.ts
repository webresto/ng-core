export class EventMessage {
  type:string;
  title:string;
  body:string;
  description?:string;
  data?:any;

  constructor(type:string, title:string, body:string) {
    this.type = type;
    this.title = title;
    this.body = body;
  }
}
