import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostViewRoutingModule} from './post-view-routing.module';
import {PostViewComponent} from './post-view.component';
import {uapiLayoutModule} from "../../../shared/layout/layout.module";
import {StatsModule} from "../../../shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    PostViewRoutingModule,

    uapiLayoutModule,
    StatsModule,
  ],
  declarations: [PostViewComponent]
})
export class PostViewModule {
}
