import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { flotChartsRouting } from './flot-charts.routing';
import { FlotChartsComponent } from './flot-charts.component';
import {uapiModule} from "../../shared/uapi.module";
import {FlotChartModule} from "../../shared/graphs/flot-chart/flot-chart.module";

@NgModule({
  imports: [
    CommonModule,
    flotChartsRouting,
    uapiModule,
    FlotChartModule
  ],
  declarations: [FlotChartsComponent]
})
export class FlotChartsModule { }
