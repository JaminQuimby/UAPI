import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { uapiModule } from '../../../shared/uapi.module';
import { EditProfileComponent } from './edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    uapiModule,
    ReactiveFormsModule
  ],
  declarations: [EditProfileComponent],
  exports: [EditProfileComponent]
})
export class EditProfileModule { }
