
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../shared/user/user.service';
import { UserInterface as IUser } from '../../../shared/user/user.interface';



@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html'
})


export class EditProfileComponent implements OnInit {
  public user: IUser = Object.assign({});
  @Output()
  public closeEditor: EventEmitter<boolean> = new EventEmitter();

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

 public onCancle() {

    this.closeEditor.emit(true);

  }


}
