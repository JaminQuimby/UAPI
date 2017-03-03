import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import {uapiLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";
import {uapiWidgetsModule} from "../../shared/widgets/uapi-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,

    uapiLayoutModule,
		StatsModule,
    uapiWidgetsModule,
  ],
  declarations: [InvoiceComponent]
})
export class InvoiceModule { }
