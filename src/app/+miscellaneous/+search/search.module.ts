import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {uapiLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,


    uapiLayoutModule,
		StatsModule,
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
