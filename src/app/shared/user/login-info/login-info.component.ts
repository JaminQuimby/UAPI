import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LayoutService } from '../../layout/layout.service';
import { UserInterface as IUser } from '../user.interface';

@Component({
  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
})
export class LoginInfoComponent implements OnInit {
  public user: IUser = Object.assign({});

  constructor(
    private userService: UserService,
    private layoutService: LayoutService) {
  }

  ngOnInit() {
    this.userService.getLoginInfo().subscribe(user => {
      //  console.log(JSON.stringify(user.auth));
      this.user.email = user.auth.email || '';
      this.user.displayName = user.auth.displayName || '';
      this.user.photoURL = user.auth.photoURL || './assets/img/avatars/user.png';
    });
  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle()
  }

}
