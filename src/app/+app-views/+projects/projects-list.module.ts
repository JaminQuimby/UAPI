import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsListRoutingModule} from './projects-list-routing.module';
import {ProjectsListComponent} from './projects-list.component';
import {uapiDatatableModule} from "../../shared/ui/datatable/uapi-datatable.module";
import {uapiLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";
import {uapiWidgetsModule} from "../../shared/widgets/uapi-widgets.module";

@NgModule({
  imports: [
    CommonModule,
    ProjectsListRoutingModule,
    uapiLayoutModule,
    StatsModule,
    uapiDatatableModule,

    uapiWidgetsModule,
  ],
  declarations: [ProjectsListComponent]
})
export class ProjectsListModule {
}
