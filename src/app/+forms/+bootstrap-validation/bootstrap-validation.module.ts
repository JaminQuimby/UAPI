import {Component, OnInit, NgModule} from '@angular/core';
import {MovieFormComponent} from "./movie-form/movie-form.component";
import {TogglingFormComponent} from "./toggling-form/toggling-form.component";
import {AttributeFormComponent} from "./attribute-form/attribute-form.component";
import {ButtonGroupFormComponent} from "./button-group-form/button-group-form.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {ProfileFormComponent} from "./profile-form/profile-form.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {uapiModule} from "../../shared/uapi.module";
import {BootstrapValidationComponent} from "./bootstrap-validation.component";
import {uapiValidationModule} from "../../shared/forms/validation/uapi-validation.module";
import {bootstrapValidationRouting} from "./bootstrap-validation.routing";

@NgModule({
  imports: [
    uapiModule,
    uapiValidationModule,
    bootstrapValidationRouting
  ],
  declarations: [ MovieFormComponent, TogglingFormComponent, ContactFormComponent,
    AttributeFormComponent, ButtonGroupFormComponent, ProductFormComponent, ProfileFormComponent,
    BootstrapValidationComponent,
  ],
  exports: []

})
export class BootstrapValidationModule{}
