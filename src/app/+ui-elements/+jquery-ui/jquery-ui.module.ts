import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqueryUiRouting } from './jquery-ui.routing';
import {JqueryUiComponent} from "./jquery-ui.component";
import {uapiModule} from "../../shared/uapi.module";
import {JqueryUiModule} from "../../shared/ui/jquery-ui/jquery-ui.module";

@NgModule({
  imports: [
    CommonModule,
    jqueryUiRouting,
    uapiModule,

    JqueryUiModule,

  ],
  declarations: [JqueryUiComponent]
})
export class JqueryUiShowcaseModule { }
