import { Component, OnInit } from '@angular/core';
import { FadeInTop } from '../../shared/animations/fade-in-top.decorator';
import { UserService } from '../../shared/user/user.service';
import { UserInterface as IUser } from '../../shared/user/user.interface';


@FadeInTop()
@Component({
  selector: 'sa-profile',
  templateUrl: './profile.component.html',
})


export class ProfileComponent implements OnInit {
  public user: IUser = Object.assign({});

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getLoginInfo().subscribe(user => {
      //  console.log(JSON.stringify(user.auth));
      this.user.email = user.auth.email;
      this.user.displayName = user.auth.displayName;
      this.user.photoURL = user.auth.photoURL || './assets/img/avatars/user.png';
   /*
      this.userService.getLoginDetails(user.auth.email).subscribe(userDetail => {
        //  console.log(JSON.stringify(user.auth));
        this.user.phone = userDetail.phone;
      });
   */
    });


  }

}
