import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { formElementsRouting } from './form-elements.routing';
import { uapiModule } from '../../../shared/uapi.module';
import { EditProfileComponent } from './edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    uapiModule
  ],
  declarations: [EditProfileComponent],
  exports: [EditProfileComponent]
})
export class EditProfileModule { }
