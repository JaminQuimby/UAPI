import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formPluginsRouting } from './form-plugins.routing';
import {FormPluginsComponent} from "./form-plugins.component";
import {XEditableWidgetComponent} from "./x-editable-widget/x-editable-widget.component";
import {DuallistboxWidgetComponent} from "./duallistbox-widget/duallistbox-widget.component";
import {uapiModule} from "../../shared/uapi.module";
import {uapiInputModule} from "../../shared/forms/input/uapi-input.module";

@NgModule({
  imports: [
    CommonModule,
    formPluginsRouting,
    uapiModule,
    uapiInputModule,
  ],
  declarations: [FormPluginsComponent, XEditableWidgetComponent, DuallistboxWidgetComponent]
})
export class FormPluginsModule { }
