
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../../shared/user/user.service';
import { UserInterface as IUser } from '../../../shared/user/user.interface';



@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html'
})


export class EditProfileComponent implements OnInit {
  
  private user: IUser = Object.assign({});
  @Output()
  private closeEditor: EventEmitter<boolean> = new EventEmitter();

  private profileEditForm = this.fb.group({
    firstname: [this.user.firstName, Validators.required],
    lastname: [this.user.lastName, Validators.required],
    phone: [this.user.phone],
    title: [this.user.title],
    skype: [this.user.skype]
  });

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    
    this.userService.getLoginInfo().subscribe(data => {
      this.user.displayName = data.auth.displayName || 'Hello Friend';
      this.user.photoURL = data.auth.photoURL || './assets/img/avatars/user.png';
    });

    this.userService.getLoginDetails().subscribe(data => {
      this.user.phone = data.phone;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.title = data.title;
      this.user.skype = data.skype;
      this.user.photoURL = data.photoURL;
      console.log(data.photoURL)
    });
  }

  private onCancle() {
    this.closeEditor.emit(true);
  }

  private doSaveProfile(event) {
    this.userService.setLoginDetails(this.profileEditForm.value);
  }

}
