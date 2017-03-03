import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import {uapiLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";
import {uapiWidgetsModule} from "../../shared/widgets/uapi-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    BlankRoutingModule,

    uapiLayoutModule,
		StatsModule,
    uapiWidgetsModule,
  ],
  declarations: [BlankComponent]
})
export class BlankModule { }
