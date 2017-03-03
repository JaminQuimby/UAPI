import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formElementsRouting } from './form-elements.routing';
import {uapiModule} from "../../shared/uapi.module";
import {FormElementsComponent} from "./form-elements.component";

@NgModule({
  imports: [
    CommonModule,
    formElementsRouting,
    uapiModule
  ],
  declarations: [FormElementsComponent]
})
export class FormElementsModule { }
