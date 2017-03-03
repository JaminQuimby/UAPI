import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import {uapiModule} from "../shared/uapi.module";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
      uapiModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
