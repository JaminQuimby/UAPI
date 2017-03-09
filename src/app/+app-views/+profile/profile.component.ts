import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FadeInTop } from '../../shared/animations/fade-in-top.decorator';
import { UserService } from '../../shared/user/user.service';
import { UserModel } from '../../shared/user/user.model';


@FadeInTop()
@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html'
})


export class ProfileComponent implements OnInit {
  private user: UserModel = new UserModel();

  private isEditor: boolean = false;

  constructor(private userService: UserService, private ref: ChangeDetectorRef) { }

  ngOnInit() {

    this.userService.getLoginInfo()
      .subscribe(
      data => this.doProfileUpdate(data),
      error => this.throwError(error),
      () => this.ref.markForCheck()
      );
    this.userService.getLoginDetails()
      .subscribe(
      data => this.doProfileUpdate(data),
      error => this.throwError(error),
      () => this.ref.markForCheck()
      );
  }
  private doProfileUpdate(data): void {
    this.user = Object.assign({}, this.user, data, data.auth);
    if (typeof data.displayName === 'undefined') {
      this.user.displayName = data.firstName + ' ' + data.lastName;
    }
    if (data.auth) {
      this.user.photoURL = data.auth.photoURL
        || this.userService.getProfilePicture(data.auth.email)
        || './assets/img/avatars/user.png';
    }
  }
  private throwError(error) { console.log(error); }

  private onEdit(event: any): void {

    this.isEditor = !this.isEditor;
    this.ref.markForCheck();
    console.log(this.isEditor);
  }


}
