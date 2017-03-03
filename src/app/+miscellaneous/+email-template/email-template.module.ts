import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailTemplateRoutingModule } from './email-template-routing.module';
import { EmailTemplateComponent } from './email-template.component';
import {uapiLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    EmailTemplateRoutingModule,

    uapiLayoutModule,
    StatsModule,
  ],
  declarations: [EmailTemplateComponent]
})
export class EmailTemplateModule { }
