import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { uapiLayoutModule } from '../../shared/layout/layout.module';
import { StatsModule } from '../../shared/stats/stats.module';
import { EditProfileModule } from './edit-profile/edit-profile.module';
import { SplitPipe } from '../../shared/pipes/split.pipe';
import { PhonePipe } from '../../shared/pipes/phone.pipe';



@NgModule({
  imports: [
    CommonModule,
    uapiLayoutModule,
    StatsModule,
    ProfileRoutingModule,
    EditProfileModule
  ],
  declarations: [ProfileComponent, SplitPipe, PhonePipe]
})
export class ProfileModule {
}
