import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dygraphsRouting } from './dygraphs.routing';
import { DygraphsComponent } from './dygraphs.component';
import {uapiModule} from "../../shared/uapi.module";
import {DygraphModule} from "../../shared/graphs/dygraph/dygraph.module";

@NgModule({
  imports: [
    CommonModule,
    dygraphsRouting,
    uapiModule,
    DygraphModule
  ],
  declarations: [DygraphsComponent]
})
export class DygraphsModule { }
