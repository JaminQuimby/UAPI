import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralViewRoutingModule} from './general-view-routing.module';
import {GeneralViewComponent} from './general-view.component';
import {uapiLayoutModule} from "../../../shared/layout/layout.module";
import {StatsModule} from "../../../shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    GeneralViewRoutingModule,
    uapiLayoutModule,
    StatsModule,
  ],
  declarations: [GeneralViewComponent]
})
export class GeneralViewModule {
}
