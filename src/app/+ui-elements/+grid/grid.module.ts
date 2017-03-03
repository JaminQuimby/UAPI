import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gridRouting } from './grid.routing';
import {GridComponent} from "./grid.component";
import {uapiModule} from "../../shared/uapi.module";

@NgModule({
  imports: [
    CommonModule,
    gridRouting,
    uapiModule,
  ],
  declarations: [GridComponent]
})
export class GridModule { }
