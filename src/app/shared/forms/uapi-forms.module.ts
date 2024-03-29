

import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {CommonModule} from "@angular/common";
import {uapiInputModule} from "./input/smartadmin-input.module";
import {uapiValidationModule} from "./validation/smartadmin-validation.module";
import {DropzoneModule} from "./dropzone/dropzone.module";
import {uapiWizardsModule} from "./wizards/smartadmin-wizards.module";

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [
  ],
  exports: [

    uapiInputModule,

    uapiValidationModule,

    DropzoneModule,
    uapiWizardsModule,
  ]

})
export class uapiFormsModule{}
