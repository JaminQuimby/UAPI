import {NgModule} from '@angular/core';

import {uapiModule} from '../shared/uapi.module'

import {routing} from './tables.routing';
import {NormalTablesComponent} from "./+normal-tables/normal-tables.component";
import {DatatablesShowcaseComponent} from "./+datatables-showcase/datatables-showcase.component";
import {uapiDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";
import { DatatablesRestDemoComponent } from './+datatables-showcase/datatables-rest-demo.component';

@NgModule({
  declarations: [
    NormalTablesComponent, DatatablesShowcaseComponent, DatatablesRestDemoComponent
  ],
  imports: [
    uapiModule,
    uapiDatatableModule,

    routing
  ],
})
export class TablesModule {}
