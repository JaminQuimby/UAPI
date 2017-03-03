import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { treeViewsRouting } from './tree-views.routing';
import {TreeViewsComponent} from "./tree-views.component";
import {uapiModule} from "../../shared/uapi.module";
import {TreeViewModule} from "../../shared/ui/tree-view/tree-view.module";

@NgModule({
  imports: [
    CommonModule,
    treeViewsRouting,
    uapiModule,
    TreeViewModule
  ],
  declarations: [TreeViewsComponent]
})
export class TreeViewsModule { }
