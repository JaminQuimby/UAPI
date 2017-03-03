
import { NgModule } from '@angular/core';

import { uapiModule } from '../shared/uapi.module'


import {SparklinesComponent} from "./+sparklines/sparklines.component";
import {EasyPieChartsComponent} from "./+easy-pie-charts/easy-pie-charts.component";

import { routing } from './graphs-showcase.routing';
import {InlineGraphsModule} from "../shared/graphs/inline/inline-graphs.module";

@NgModule({
    declarations: [
      SparklinesComponent,
      EasyPieChartsComponent,
    ],
    imports: [
        uapiModule,
        routing
    ],
    providers: [],
})
export class GraphsShowcaseModule {

}
