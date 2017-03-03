import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineRoutingModule} from './timeline-routing.module';
import {TimelineComponent} from './timeline.component';
import {uapiLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    uapiLayoutModule,
    StatsModule,
    TimelineRoutingModule
  ],
  declarations: [TimelineComponent]
})
export class TimelineModule {
}
