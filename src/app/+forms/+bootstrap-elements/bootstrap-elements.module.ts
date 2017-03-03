import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapElementsRouting } from './bootstrap-elements.routing';
import {BootstrapElementsComponent} from "./bootstrap-elements.component";
import {uapiModule} from "../../shared/uapi.module";

@NgModule({
  imports: [
    CommonModule,
    bootstrapElementsRouting,
    uapiModule
  ],
  declarations: [BootstrapElementsComponent]
})
export class BootstrapElementsModule { }
