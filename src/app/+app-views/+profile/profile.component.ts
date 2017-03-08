import { Component, OnInit, Input } from '@angular/core';
import { FadeInTop } from '../../shared/animations/fade-in-top.decorator';
import { UserService } from '../../shared/user/user.service';
import { UserInterface as IUser } from '../../shared/user/user.interface';


@FadeInTop()
@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html'
})


export class ProfileComponent implements OnInit {
  public user: IUser = Object.assign({});

  private isEditor: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getLoginInfo().subscribe(data => {
      // console.log(JSON.stringify(data));
      this.user.email = data.auth.email;
      this.user.displayName = data.auth.displayName || 'Hello Friend';
      this.user.photoURL = data.auth.photoURL || './assets/img/avatars/user.png';
    });

    this.userService.getLoginDetails().subscribe(data => {
      this.user.phone = data.phone;
    });
  }

  private onEdit(event: any): void {

    this.isEditor = !this.isEditor;

    console.log(this.isEditor);
  }


}
