import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorRoutingModule } from './ckeditor-routing.module';
import { CkeditorComponent } from './ckeditor.component';
import {uapiLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";
import {uapiWidgetsModule} from "../../shared/widgets/uapi-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    CkeditorRoutingModule,


    uapiLayoutModule,
		StatsModule,
    uapiWidgetsModule,
  ],
  declarations: [CkeditorComponent]
})
export class CkeditorModule { }
