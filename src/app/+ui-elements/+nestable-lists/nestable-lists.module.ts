import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nestableListsRouting } from './nestable-lists.routing';
import {NestableListsComponent} from "./nestable-lists.component";
import {uapiModule} from "../../shared/uapi.module";
import {NestableListModule} from "../../shared/ui/nestable-list/nestable-list.module";

@NgModule({
  imports: [
    CommonModule,
    nestableListsRouting,
    uapiModule,
    NestableListModule,
  ],
  declarations: [NestableListsComponent]
})
export class NestableListsModule { }
