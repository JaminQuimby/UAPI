import {NgModule} from "@angular/core";

import {routing} from "./app-views.routing";
import {uapiModule} from "../shared/uapi.module";

@NgModule({
  declarations: [

  ],
  imports: [
    uapiModule,
    routing,

  ],
  entryComponents: []
})
export class AppViewsModule {
}
