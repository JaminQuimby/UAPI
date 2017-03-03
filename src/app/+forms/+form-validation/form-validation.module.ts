import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formValidationRouting } from './form-validation.routing';
import {uapiModule} from "../../shared/uapi.module";
import {FormValidationComponent} from "./form-validation.component";

@NgModule({
  imports: [
    CommonModule,
    formValidationRouting,
    uapiModule
  ],
  declarations: [FormValidationComponent]
})
export class FormValidationModule { }
