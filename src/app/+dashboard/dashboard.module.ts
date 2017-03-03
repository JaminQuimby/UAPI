import {NgModule} from '@angular/core';

import {uapiModule} from '../shared/uapi.module'

import {routing} from './dashboard.routing';


@NgModule({
  imports: [
    uapiModule,
    routing,
  ],
  declarations: [],
  providers: [],
})
export class DashboardModule {

}
