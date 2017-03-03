import {NgModule} from '@angular/core';

import {CheckoutFormComponent} from "./checkout-form";
import {RegistrationFormComponent} from "./registration-form";
import {ReviewFormComponent} from "./review-form/review-form.component";
import {OrderFormComponent} from "./order-form/order-form.component";
import {CommentFormComponent} from "./comment-form/comment-form.component";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {uapiModule} from "../../shared/uapi.module";
import {FormLayoutsComponent} from "./form-layouts.component";
import {formLayoutsRouting} from "./form-layouts.routing";
import {uapiValidationModule} from "../../shared/forms/validation/uapi-validation.module";
import {uapiInputModule} from "../../shared/forms/input/uapi-input.module";

@NgModule({
  imports: [
    uapiModule,

    formLayoutsRouting,
    uapiValidationModule,
    uapiInputModule
  ],
  declarations: [CheckoutFormComponent, RegistrationFormComponent,
    ReviewFormComponent, OrderFormComponent, CommentFormComponent, ContactFormComponent,
    FormLayoutsComponent
  ],
})
export class FormLayoutsModule {}
