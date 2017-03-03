import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { morrisChartsRouting } from './morris-charts.routing';
import { MorrisChartsComponent } from './morris-charts.component';
import {uapiModule} from "../../shared/uapi.module";
import {MorrisGraphModule} from "../../shared/graphs/morris-graph/morris-graph.module";

@NgModule({
  imports: [
    CommonModule,
    morrisChartsRouting,
    uapiModule,
    MorrisGraphModule
  ],
  declarations: [MorrisChartsComponent]
})
export class MorrisChartsModule { }
