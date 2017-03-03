import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { highchartTablesRouting } from './highchart-tables.routing';
import { HighchartTablesComponent } from './highchart-tables.component';
import {uapiModule} from "../../shared/uapi.module";
import {HighchartsModule} from "../../shared/graphs/highcharts/highcharts.module";

@NgModule({
  imports: [
    CommonModule,
    highchartTablesRouting,
    uapiModule,
    HighchartsModule
  ],
  declarations: [HighchartTablesComponent]
})
export class HighchartTablesModule { }
