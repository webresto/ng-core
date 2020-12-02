import { NgModule } from '@angular/core';
import { EventMessage } from './services/event-message';

@NgModule({
  imports: [EventMessage],
  declarations: [],
  providers:[],
  exports: [EventMessage]
})
export class NgCoreModule { }
