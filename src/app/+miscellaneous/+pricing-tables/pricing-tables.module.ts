import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingTablesRoutingModule } from './pricing-tables-routing.module';
import { PricingTablesComponent } from './pricing-tables.component';
import {uapiLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    PricingTablesRoutingModule,


    uapiLayoutModule,
		StatsModule,
  ],
  declarations: [PricingTablesComponent]
})
export class PricingTablesModule { }
