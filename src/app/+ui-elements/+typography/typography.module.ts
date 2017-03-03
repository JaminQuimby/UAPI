import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { typographyRouting } from './typography.routing';
import {TypographyComponent} from "./typography.component";
import {uapiModule} from "../../shared/uapi.module";

@NgModule({
  imports: [
    CommonModule,
    typographyRouting,
    uapiModule,
  ],
  declarations: [TypographyComponent]
})
export class TypographyModule { }
