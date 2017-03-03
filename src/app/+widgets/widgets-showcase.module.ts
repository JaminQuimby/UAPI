import {NgModule} from "@angular/core";

import {uapiModule} from "../shared/uapi.module";
import {routing} from "./widgets-showcase.routing";
import {WidgetsShowcaseComponent} from "./widgets-showcase.component";



@NgModule({
  declarations: [
    WidgetsShowcaseComponent
  ],
  imports: [
    uapiModule,
    routing
  ],
  providers: [],
})
export class WidgetsShowcaseModule {

}
