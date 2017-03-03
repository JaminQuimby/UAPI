import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapEditorsComponent } from './bootstrap-editors.component';
import {bootstrapEditorsRouting} from "./bootstrap-editors.routing";
import {uapiEditorsModule} from "../../shared/forms/editors/uapi-editors.module";
import {uapiModule} from "../../shared/uapi.module";

@NgModule({
  imports: [
    CommonModule,
    bootstrapEditorsRouting,
    uapiEditorsModule,
    uapiModule,

  ],
  declarations: [BootstrapEditorsComponent]
})
export class BootstrapEditorsModule { }
