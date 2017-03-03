import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chartJsShowcaseRouting } from './chart-js-showcase.routing';
import { ChartJsShowcaseComponent } from './chart-js-showcase.component';
import {uapiModule} from "../../shared/uapi.module";
import {ChartJsModule} from "../../shared/graphs/chart-js/chart-js.module";

@NgModule({
  imports: [
    CommonModule,
    chartJsShowcaseRouting,
    uapiModule,
    ChartJsModule,
  ],
  declarations: [ChartJsShowcaseComponent]
})
export class ChartJsShowcaseModule { }
