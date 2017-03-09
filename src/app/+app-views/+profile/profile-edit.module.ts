import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { uapiModule } from '../../shared/uapi.module';
import { ProfileEditComponent } from './profile-edit.component';
import { UserService } from '../../shared/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    uapiModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  declarations: [ProfileEditComponent],
  exports: [ProfileEditComponent]
})
export class ProfileEditModule { }
