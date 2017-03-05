import { Component, OnInit } from '@angular/core';
import { FadeInTop } from '../../shared/animations/fade-in-top.decorator';
import { UserService } from '../../shared/user/user.service';


@FadeInTop()
@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html'
})


export class ProfileComponent implements OnInit {
  public user: any = { 'email': '', 'displayName': '', 'photoURL': '' };
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoginInfo().subscribe(user => {
      //  console.log(JSON.stringify(user.auth));
      this.user.email = user.auth.email || '';
      this.user.displayName = user.auth.displayName || '';
      this.user.photoURL = user.auth.photoURL || './assets/img/avatars/user.png';
    });
  }

}
