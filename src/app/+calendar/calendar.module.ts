
import {NgModule} from "@angular/core";

import {AddEventComponent} from "./add-event/add-event.component";
import {CalendarWidgetComponent} from "./calendar-widget/calendar-widget.component";
import {DraggableEvent} from "./draggable-event/draggable-event.directive";
import {EventsService} from "./shared/events.service";
import {ExternalEventsComponent} from "./external-events/external-events.component";
import {CalendarComponent} from "./calendar.component";
import {uapiModule} from "../shared/uapi.module";
import {routing} from "./calendar.routing";
import {DropdownModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    uapiModule,
    routing,
    DropdownModule,
  ],

  declarations: [
    AddEventComponent,
    CalendarWidgetComponent,
    DraggableEvent,
    ExternalEventsComponent,
    CalendarComponent,
  ],
  exports: [
    AddEventComponent,
    CalendarWidgetComponent,
    DraggableEvent,
    ExternalEventsComponent,
    CalendarComponent,
  ],
  providers: [EventsService]
})
export class CalendarModule{}
