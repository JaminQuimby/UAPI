import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buttonsRouting } from './buttons.routing';
import {ButtonsComponent} from "./buttons.component";
import {uapiModule} from "../../shared/uapi.module";

@NgModule({
  imports: [
    CommonModule,
    buttonsRouting,
    uapiModule
  ],
  declarations: [ButtonsComponent]
})
export class ButtonsModule { }
